# Function 

- Uma função é um objeto que contém um bloco de código executável.

- **Function Declaration**:
- É possível ler antes da declaração. E é pré carregada no contexto de execução.

```
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(2, 2)); // 4 
```

- **Function Expression**:

```
const sum = function (a, b) {
    return a + b;
  }
  console.log(sum(2, 2)); // 4 
```

- Na linguagem JavaScript, as **funções são de primeira class**, ou seja, *podem ser atribuídas a uma variável, passadas por parâmetro ou serem retornada de uma outra função*.

- **Atribuídas a uma variável:**
```
  const sum = function(a, b) {
    return a + b;
  };

  const subtract = function (a,b) {
    return a - b;
  };

  console.log(sum(2,2)); // 4 
  console.log(subtract(2,2)); // 0 
```

- **Retornando uma função.**

```
  const calculator = function () {
    return function () {
      return "calculator";
    };
  };

  console.log(calculator()()); // calculator
```

- **Passar uma função como parâmetro**:

```
  const calculator = function (fn) {
    return function (a, b) {
      return fn(a, b);
    };
  };

  console.log(calculator(sum)(2,2)); // 4
```

- É possível invocar uma função com menos ou mais parâmetros, não necessariamente seguindo o que está declarado.

```
  const sum = function (a,b) {
    return a + b;
  };

  console.log(sum(2,2)); // 4
  console.log(sum(5)); // NaN (5 + undefined = NaN)
  console.log(sum(1,2,3)); // 3 (o último é ignorado)
```

- Podemos definir *valores padrão* para cada um dos parâmetros de uma função. Default Parameters
 
```
  const sum = function(a = 1, b = 1) {
    return a + b;
  };

  console.log(sum(5)); //  6 (assume b como 1)
  console.log(sum()); // 2 (assume ambos como 1)
```

- Por meio da variável implícita *arguments* é possível acessar os parâmetros da função invocada.

```
  const sum = function () {
    console.log(arguments);
  };
  sum(); // {}
  sum(1,2,3,4,5,6,7,8,9); // {'0': 1, '1': 2 ...}
```
```
  const sum = function () {
    let total = 0;
    for (let argument in arguments) {
      total += arguments[argument];
    }
    return total;
  };
  sum(1,2,3,4,5,6,7,8,9); // 45 (soma de todos)
```

- Também é possível acessar os parâmetros da função invocada por meio do *rest parameter*.
- O rest parameter deve ser sempre o último da lista de parameter.
  
```
  const sum = function (...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  };
  sum(1,2,3,4,5,6,7,8,9); // 45 (soma de todos)
```
