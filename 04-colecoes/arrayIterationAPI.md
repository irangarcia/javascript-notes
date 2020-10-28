# Array Iteration API

- Os **iteration methods** quando invocados *iteram sobre os elementos do array*.

<br>

- **forEach**: Executa a função passada por parâmetro para cada elemento.

```js
  const frameworks = ["Angular.js", "Ember.js", "Vue.js"];

  frameworks.forEach((framework) => console.log(framework)); // Angular.js Ember.js Vue.js
```
<br>

- **filter**: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro.

```js
  const frameworks = [
    {
      name: "Angular.js",
      contribuitors: 1548
    },
    {
      name: "Ember.js",
      contribuitors: 746
    },
    {
      name: "Vue.js",
      contribuitors: 240
    }
  ];

  const result = frameworks.filter(function(framework) {
    return framework.contribuitors < 1000;
  });

  console.log(result); // [ { name: Ember.js, contribuitors: 746 }, { name: Vue.js, contribuitors: 240 } ] 
```
<br>

- **find**: Retorna o primeiro elemento que retornou true na função passada por parâmetro.

```js
  (...)

  const result = frameworks.find(function(framework) {
    return framework.name === "Angular.js";
  });

  console.log(result); // { name: Angular.js, contribuitors: 1548}
```
<br>

- **some**: Retorna true se *UM OU MAIS* elementos retornaram true na função passada por parâmetro.
- **every**: Retorna true se *TODOS* os elementos retornaram true na função passada por parâmetro. 


```js
  (...)
  
  const result = frameworks.some(function(framework) {
    return framework.name.includes("js"); 
  }); // true

  const result = frameworks.some(function(framework) {
    return framework.contribuitors > 1000; 
  }); // false 
```
<br>

- **map**: Retorna um novo array com base no retorno da função passada por parâmetro.

```js
  (...)

  const result = frameworks.map(function(framework) {
    return framework.name; 
  }); // [ 'Angular.js', 'Ember.js', 'Vue.js']
```
<br>

- **reduce**: Retorna um valor com base no retorno da função passada por parâmetro. Tem uma função de acumulação.

```js
  (...)
  
  const result = frameworks.reduce(function(total, frameworks) {
    return total + framework.contribuitors
  }, 0); // 0 é o valor inicial do total

  console.log(result); // 2534 
```