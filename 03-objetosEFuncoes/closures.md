# Closures 

- Na linguagem JavaScript, **toda função permite a utilização de variáveis** que não foram declaradas e nem passadas por parâmetro. Free variables também chamadas 

```js
  const v1 = 10;

  function fn1() {
    function f2() {
      console.log(v1);
    };
    fn2();
  };

  fn1(); 
```

- O problema é que como as funções são de primeira classe, **depedendo da situação poderia existir uma ambiguidade** e isso foi *resolvido com o conceito de closure*. Manter o scope chain de forma estática

```js
  function fn() {
    const v1 = 10;
    return function () {
      console.log(v1);   
    }
  };

  const fn2 = fn1();

  fn2(); // 10.
```

- Resumindo, closure é uma função com um **scope chain estático** que é *definida no momento em que a função é criada*, por isso, *todas as funções em JavaScript são closures.*

```js
  function fn() {
    const v1 = 10;
    return function () {
      console.log(v1);   
    }
  };

  const fn2 = fn1();

  const v1 = 100;

  fn2(); // 10
```

```js
  const v1 = 10;
  
  function fn1() {
    console.log(v1);
  }

  function fn2(fn1) {
    const v1 = 100;
    fn1();
  };

  fn2(fn1); // 10 | Quando fn1 foi criado era 10.
```

- Apesar de estático, o scope chain faz referência para objetos que estão na memória e **podem ser compartilhados por mais de uma função**. Compartilhamento de escopo.


```js
  function fn1() {
    let v1 = 10;
    return {
      m1() {
        console.log(++v1);
      },
      m2() {
        console.log(--v1);
      }
    };
  };

  const obj1 = fn1();
  
  obj1.m1(); // 11 aponta pra mesma referência
  
  obj.m2(); // 10: aponta pra mesma referência 
```

- Pelo escopo ser compartilhado coisas estranhas como essa acontecem: 

```js
  const obj1 = {};
  
  for (var v1 = 0; v1 < 3; v1++) {
    obj1[v1] = function () {
      console.log(v1);
    }
  };

  obj1[0](); // 3
  obj1[1](); // 3
  obj1[2](); // 3
```

```js
  const obj1 = {};
  
  for (var v1 = 0; v1 < 3; v1++) {
    obj1[v1] = (function (v2) {
      return function () {
        console.log(v2);
      }
    })(v1);
  };

  obj1[0](); // 0
  obj1[1](); // 1
  obj1[2](); // 2
```