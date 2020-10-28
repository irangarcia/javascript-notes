# Destructuring

- Por meio do **destructuring** podemos *extrair valores de arrays e objetos de uma forma mais simples e direta*.

```js 
  const language = "C;Dennis Ritchie;1972".split(";");
  
  console.log(language); // [ 'C', 'Dennis Ritchie', '1972']
```

- É possível **extrair os valores de um array** criando variáveis em ordem, de acordo com a *posição de cada elemento*.

```js
  const [, author, year] = "C;Dennis Ritchie;1972".split(";"); // Deixar vazio

  console.log(author, year); // Dennis Ritchie 1972
```

- Asisim como nas funções, é possível definir **valores padrão** para cada uma das variáveis. 

```js
  const language = "C;Dennis Ritchie".split(";");

  const [name = "-", author = "-", year = "-"] = language; // valores padrão

  console.log(name, author, year); // C Dennis Ritchie - 
```

- Para **extrair os valores de um objeto** é necessário *referenciar a chave de cada uma das propriedades*.

```js
  const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
  };

  const {name, author, year} = language;

  console.log(name, author, year);
```

- É possível definir **nomes diferentes para as variáveis** em relação as *chaves das propriedades do objeto*.

```js
  const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
  };

  const {name: n, author: a, year: y} = language;

  console.log(n, a, y); // C Dennis Ritchie 1972
```

- Também podemos referenciar as propriedades de **objetos que estão dentro de outros objetos**.

```js
  const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
    company: {
      name: "Bell Labs"
    }
  };

  const {name: n, author: a, year: y, company: {name: c}} = language;

  console.log(n, a, y, c); // C Dennis Ritchie 1972 Bell Labs
```

- Podemos aplicar destructuring nos **parâmetros de uma função**, tanto com *arrays quanto com objetos*.

```js
  // Arrays
  const sum = function( [a, b] ) {
    return a + b;
  }; 

  console.log(sum( [2,2] ));

  // Objetos
  const sum = function( {a, b} ) {
    return a + b;
  }; 

  console.log(sum( {a: 2, b: 2} ));
```