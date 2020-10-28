# Execution Context 

- O **Execution Context** é o *ambiente onde o código é executado*, sendo composto pelo **variable object**, **scope chain** (cadeia de escopos) e **this**.

<br>

<center>

|**Execution Context Stack**   |
|----------                    |
| Active Execution Context     | 
| <center>...</center>         |
| Execution Context 2          |
| Execution Context 1          |
| **Global Execution Context** |

<br>
</center>

- Dentro de uma função **é possível acessar variáveis existentes fora dela**, *por meio da scope chain*.
- Sempre acessará a mais próxima do contexto de execução.

```js 
  const v1 = 10;
  
  const fn1 = function() {
    const v1 = 100;
    const fn2 = function() {
      const v1 = 1000;
      console.log(v1); // 1000
    };
    fn2(); 
  };
  
  fn1();
```

- Não é possível acessar de fora uma variável que foi *declarada dentro de uma função*. 

```js
  const v1 = 10;
  
  const fn1 = function() {
    const v1 = 100;
    const fn2 = function() {
      const v1 = 1000;
      console.log(v1); // 1000
      const v2 = 999; 
      console.log(v2); // 999
      
    };
    fn2(); 
  };
  
  fn1();

  console.log(v2); // ReferenceError: v2 is not defined
```

- **Toda função tem uma variável this** que contém a referência para o *objeto responsável pela sua invocação*.

```js
  const obj1 = {
    p1: 10,
    getP1: function() {
      const fn1 = () => {
        return this.p1;
      }
      return this.p1;
    }
  };

  console.log(obj1.getP1()); // 10
```