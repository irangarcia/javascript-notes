# Getter e Setter

- As funções do tipo **getter** e **setter** servem para interceptar o acesso as propriedades de determinado um objeto.

```
  const rectangle = {
    x: 10,
    y: 2,
    get area() {
      return this.x * this.y;
    }
  };
  
  console.log(rectangle.area); // 
```

- Utilizar chaves diferentes para função setter e a propriedade do objeto.
- Utilizar underline antes da propriedade para realizar.
  
```
  const rectangle = {
    set x(x) {
      this._x = x;
    },
    set y(y) {
      this._y = y;
    },
    get area() {
      return this._x * this._y;
    }
  };
  
  rectangle.x = 10;
  
  rectangle.y = 2;
  
  console.log(rectangle.area); // 20
```

- Por meio da operação **defineProperty** da Object API, também é possível *definir funções do tipo getter e setter*.

```
  const rectangle = {};
  
  Object.defineProperty(rectangle, "x", {
    set(x) {
      this._x = x;
    }
  });
  
  Object.defineProperty(rectangle, "y", {
    set(y) {
      this._y = y;
    }
  });
  
  Object.defineProperty(rectangle, "area", {
    get() {
      return this._x * this._y;
    } 
  });
  
  rectangle.x = 10;
  
  rectangle.y = 2;
  
  console.log(rectangle.area); // 20
```