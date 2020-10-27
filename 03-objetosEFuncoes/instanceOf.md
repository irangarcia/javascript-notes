# Instance Of

- Com o operador **instanceof** é possível verificar se um objeto foi criado por meio de uma determinada função construtora *analisando a sua cadeia de protótipos*.

```javascript
  const date = new Date();
  
  console.log(date instanceof Date); // true

  console.log(date instanceof Object); // true

  console.log(date instanceof Array); // false
```

- *Instanceof alternativo*: 
```javascript
  const _instanceof = function(obj, fn) {
    if (obj === fn.prototype) return true;

    if (obj === null) return false;

    return _instanceof(obj.__proto__, fn);
  };
  
  console.log(_instanceof(date, Date)); // true

  console.log(_instanceof(date, Object)); // true

  console.log(_instanceof(date, Array)); // false
```

- Qual é a diferença entre o *typeof* e o *instanceof*? 

```javascript
  ## typeof mostra qual o tipo de dado
  console.log(typeof date); // object 
```
