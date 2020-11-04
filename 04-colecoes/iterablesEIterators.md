# Iterables e Iterators

- São **convenções** implementadas por Arrays, Sets e Strings que os *tornam iteráveis por meio de um protocolo de iteração*.

```js
  const languages = ["JavaScript", "Lisp", "COBOL"];

  for (let language of languages) {
    console.log(language); // JavaScript Lisp COBOL 
  }
```

```js
  const classicLanguages = ["Fortran", "Lisp", "COBOL"];

  const modernLanguages = ["Python", "Ruby", "JavaScript"];

  const languages = [...classicLanguages, ...modernLanguages]; 


```

- Além do Array é possível utilizar o procotocolo de iteração dos objetos Map, Set e String.

```js
  const languages = [["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]];

  for (let [language, year] of languages) {
    console.log(language, year);
  }
```
