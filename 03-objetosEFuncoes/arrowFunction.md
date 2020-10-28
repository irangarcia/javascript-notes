# Arrow Functions

- As **arrow functions** tem uma abordagem mais simples e direta para escrever uma função e *podem melhorar a legibilidade do código em diversas situações*.

- Quando há um parâmetro apenas, não é necessário o uso de parenteses.

- **Sempre** que é retirado as chaves o return é automático.
  
```js
  const sum = (a,b) => a + b;

  const subtract = (a,b) => a - b; 

  const calculator = fn => (a, b) => fn(a, b);

  console.log(calculator(sum)(2, 2));  

  console.log(calculator(subtract)(2, 2)); 
```

- As arrow functions **não possuem** suas próprias variáveis *this* e *arguments*.
- Não utilizar arrow function como método.

```js
  const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1995,
    getAge: () => {
      (new Date()).getFullYear() - this.year;
    }
  };

  console.log(person);

  console.log(person.getAge());
```


- Evitar arguments com arrow function: 
  
```js
  const sum = () => {
    let total = 0;
    for (let argument in arguments) {
      total += arguments[argument];
    }
    return total;
  };

  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))
```

- Se eu quiser retornar um objeto? 
- Para retornar um objeto de dentro de uma arrow function é **necessário colocá-lo entre parenteses**.
  
```js
  const createPerson = (name, city, year) => ({name, city, year});
  
  const person = createPerson("Alan Key", "Springfield", 1940);

  console.log(person); 
```