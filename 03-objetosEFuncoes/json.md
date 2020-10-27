# JSON

- JSON, ou JavaScript Object Notation, **é um formato de intercâmbio de dados**, derivado da linguagem JavaScript que foi descoberto pro Douglas Crockford e padronizado pelo ECMA-404. 
- Troca de dados entre sistemas.

- JSON aceita: Number, String, Boolean, Object, Array, null.

- O método **JSON.stringify** converte um determinado tipo de dado para JSON.

```
  JSON.stringify(10); // '10'
  JSON.stringify("JavaScript"); // '"JavaScript"'
  JSON.stringify(true); // 'true'
  JSON.stringify(false); // 'false'
  JSON.stringify({name: "Self", paradigm: "OO"}); // '{"name": "Self, "paradigm": "OO"}'
  JSON.stringify([1,2,3,4,5,6,7,8,9]); // '[1,2,3,4,5,6,7,8,9]'
  JSON.stringify(null); // 'null'
```

- O método **JSON.parse** converte um JSON para um determinado tipo de dado. 
```
  JSON.parse('10'); // 10 
  JSON.parse('"JavaScript"'); // 'JavaScript'
  JSON.parse('true'); // true
  JSON.parse('false'); // false 
  JSON.parse('{"name": "Self, "paradigm": "OO"}'); // {name: "Self", paradigm: "OO"}
  JSON.parse('[1,2,3,4,5,6,7,8,9]'); //  [1,2,3,4,5,6,7,8,9]
  JSON.parse('null'); // null 
```


- Forma de comparar objetos com *JSON.stringify*. 

```
  const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
  };
  const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
  };
  console.log(JSON.stringify(book1) === JSON.stringify(book2)); // true
```

- Reconstruir objetos.

```
  const book3 = book2;
  console.log(book2 === book3); // true

  OU 

  const book3 = JSON.parse(JSON.stringify(book2));
  console.log(book2 === book3); // false
```

- JSON e Object são dois conceitos *completamente diferentes*. JSON é um Subset.