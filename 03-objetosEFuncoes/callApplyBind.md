# Call, Apply e Bind

- Por meio das operações **call** e **apply** é possível invocar uma função *passando o this por parâmetro*.

```
  const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
  const circle = {
    radius: 10, 
    calculateArea
  };
  console.log(calculateArea.call(circle)); // 314.148265
  console.log(calculateArea.apply(circle)); // 314.148265
```

- **Diferença entre Call e Apply**:

```
  const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
  };
  const circle = {
    radius: 10, 
    calculateArea
  };
  console.log(calculateArea.call(circle, Math.round)); // o primeiro parâmetro é o this e o resto são da função.
  console.log(calculateArea.apply(circle, [Math.ceil])); // quando for passado dinamicamente usar Apply.
```

- A operação **bind** permite *encapsular o this dentro da função*, retornando-a.

```
  const calculateArea = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
  };
  const circle = {
    radius: 10, 
    calculateArea
  };
  const calculateAreaForCircle = calculateArea.bind(circle);
  console.log(calculateAreaForCircle(Math.round));
  console.log(calculateAreaForCircle(Math.ceil));
```