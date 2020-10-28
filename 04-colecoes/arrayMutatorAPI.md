# Array Mutator API

- Os **mutator methods** quando invocados *modificam o array*.

<br>

- **push**: Adiciona um elemento no final. *Retorna o novo lenght do array*.
- **pop**: Remove um elemento do final. *Retorna o elemento removido*.

```js
  const languages = ["Python", "C", "Java"];

  languages.push("Go"); // 4
  
  languages.push("Elixir"); // 5

  ['Python', 'C', 'Java', 'Go', 'Elixir']

  languages.pop(); // Elixir
  
  languages.pop(); // Go
```
<br>

- **unshift**: Adiciona um elemento no início. *Retorna o novo lenght do array*.
- **shift**: Remove um elemento do início. *Retorna o elemento removido*.

```js
  const languages = ["Python", "C", "Java"];

  languages.unshift("Ruby"); // 4
  
  languages.unshift("Go"); // 5

  ['Go', 'Ruby', 'Python', 'C', 'Java' ]

  languages.shift(); // Go
  
  languages.shift(); // Ruby
```

<br>

- **splice**: Remove, substitui ou adiciona um ou mais elementos em uma determinada posição. *Retorna o elemento removido*.

```js
  const languages = ["Python", "C", "Java"];

  languages.splice(1, 1); // ['C'] |  Remove na posição 1, 1 elemento.

  ['Python', 'Java']

  languages.splice(1, 0, "C++", "C#"); // [] | Na posição 1, irá remover 0 elementos e adicionar C++ e C#.

  ['Python', 'C++', 'C#', 'Java']

  languages.splice(1, 2, "C"); // ['C++', 'C#'] | Na posição 1, irá remover 2 elementos (elementos da posição 1 e 2) e adicionar C.
  
  ['Python', 'C', 'Java']
```

<br>

- **sort**: Ordena os elementos de acordo com a função de ordenação. 
  
```js
  const languages = [
    {
      name: "Python",
      year: 1991
    },
    {
      name: "C",
      year: 1972
    },
    {
      name: "Java",
      year: 1995
    }
  ];

  languages.sort(function(a, b) {
    return 1; // Inverte a ordem do array
  })
```
<br>

- **reverse**: Inverte a ordem dos elementos.
```js
  const languages = ["Python", "C", "Java"];

  languages.reverse(); // ['Java', 'C', 'Python']

  languages.reverse(); //  ['Python', 'C', 'Java']
```
<br>

- **fill**: Preenche a ordem dos elementos de acordo com a posição de início até o fim.

```js
  const languages = ["Python", "C", "Java"];

  languages.fill("JavaScript"); // ["JavaScript", "JavaScript", "JavaScript"]

  languages.fill("JavaScript", 1); // ['Python', "JavaScript", "JavaScript"] | A partir do elemento 1 contando ele mesmo.

  languages.fill("JavaScript", 0, 2); // ["JavaScript", "JavaScript", "Java"] | A partir do 0 contando ele e parando antes do 2.
```