# This

- Existe uma variável implícita chamada **this** que faz *referência para o objeto responsável pela sua invocação*.

```
  const rectangle = {
    x: 10,
    y: 2,
    calculateArea() {
      return this.x * this.y;
    }
  };
  console.log(rectangle.calculateArea()); // 
```

Ou

```
  const calculateArea = function() {
    return this.x * this.y;
  };
  const rectangle = {
    x: 10,
    y: 2,
    calculateArea
  };
  console.log(rectangle.calculateArea()); 
```