# Array Acessor API

- Os **accessor methods** quando *invocados retornam informações específicas sobre o array*.

<br>

- **indexOf**: Retorna a posição do primeiro elemento encontrado. *Primeira ocorrência*.
- **lastIndexOf**: Retorna a posição do último elemento encontrado. *Última ocorrência*.

```js
  const languages = ["Python", "C", "C", "Java"];

  languages.indexOf("Python"); // 0

  languages.indexOf("C"); // 1

  languages.indexOf("Lua"); // -1 (Quando não existe)

  languages.lastIndexOf("C"); // 2
```
<br>

- **includes**: Retorna true se o elemento existir no Array.

```js
  const languages = ["Python", "C", "C", "Java"];

  languages.includes("Python"); // true

  languages.includes("C"); // true

  languages.includes("Lua"); // false
```
<br>

- **concat**: Retorna um nvoo array resultante da contenação de um ou mais arrays.

```js
  const ooLanguages = ["Smalltalk", "C++", "Simula"];
  const functionalLanguages = ["Elixir", "Haskell"];

  const languages = [].concat(ooLanguages, functionalLanguages); // ["Smalltalk", "C++", "Simula", "Elixir", "Haskell"]
```
<br>

- **slice**: Retorna partes de um determinado array de acordo com a posição do início e fim. (x, n-1). Para antes de chegar no último número

```js
  const languages = ["Smalltalk", "C++", "Simula", "Elixir", "Haskell"];

  languages.slice(0, 2); // [ Smalltalk, C++] (Não pega o posição de número 2)

  languages.slice(2, 4); // [ Simular Elixir ] (Não pega o posição de número 4)

  languages.slice(1); // Do elemento 1 até o fim. 
```
<br>

**join**: Converte o array para uma String, juntando os elementos com base em um separador. Inverso do split.

```js
  const languages = ["Smalltalk", "C++", "Simula", "Elixir", "Haskell"];

  languages.join(";"); // Smalltalk;C++;Simula;Elixir;Haskell

  languages.join(","); // Smalltalk,C++,Simula,Elixir,Haskell
```