# Array

- Um Array é apenas um **objeto** que oferece operações para **acessar** e **manipular** suas propriedades.

```js
  const languages = ["Python", "C", "Java"];
  // ou"Python", "C", "Java"
  const languages = new Array("Python", "C", "Java");

  console.log(typeof languages); // Object
```

- É possível inicializar apenas passando um number para a função construtora do Array.

```js
  const numbers = new Array(10);

  console.log(numbers); // [ <10 empty items> ]
```

- A propriedade **length** indica a *quantidade de elementos que existem dentro do Array*.

```js
  const languages = [];

  languages[0] = "Python";
  languages[1] = "C";
  languages[2] = "Java";

  console.log(languages.length); // 3
```

- Os elementos **vazios** dentro do Array *não* são considerados no length.

```js
  // Não usar
  ... 
  delete languages[1] 
  
  console.log(languages); // [ 'Python', <1 empty item>, 'Java' ]

  console.log(languages.length); // 3
```