# Classes

- As classes são **um tipo despecial de função** que atuam como um *template para a criação de objetos*.

```js
  const Square = class {

  };


  console.log(Square); // [Function: Square]

  const square = new Square();

  console.log(square); // Square {}
```

- As classes **NÃO sofrem hoisting**, não importando a forma como foram declaradas. Não são pré-inicializadas.

- As classes são formadas por 3 tipos de membros: **constructor**, **prototype methods** e **static methods**. 

### Constructor

- O **constructor** é invocado no *momento da inicialização de uma classe* e serve para inicializar um determinado objeto.

```js
  class Square {
    constructor(side) {
      this.side = side;
    }
  }

  const square = new Square(4);
```

### Prototype Methods

- Os **prototype methods** dependem de uma instância para serem invocados.

```js
  class Square {
    constructor(side) {
      this.side = side;
    }
    
    calculateArea() {
      return Math.pow(this.side, 2)
    }

    toString() {
      return `side: ${this.shide}`;
    }
  }

  const square = new Square(4);

  square.calculateArea(); // 16 

  square.toString(); // side: 4
```

### Static Methods

- Os **static methods** não dependem de uma instância para serem invocados.

```js
  class Square {
    constructor(side) {
      this.side = side;
    }
    
    calculateArea() {
      return Math.pow(this.side, 2);
    }

    toString() {
      return `side: ${this.shide}`;
    }

    static fromArea() {
      return new Square(Math.sqrt(area));
    }
  }

  const square = Square.fromArea(16); 

  square.calculateArea(); // 16 

  square.toString(); // side: 4
```

- As classes funcionam de forma similar as funções construtoras.

- É possível criar uma hierarquia de classes por meio da palavra-chave **extends**.

- Ao declarar um construtor na subclasse é necessário **invocar o construtor da superclass** por meio super() antes de utilizar a referência this.

```js
  class Shapes {
    toString() {
      return `area: ${this.calculateArea}`;
    }
  }

  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
    
    calculateArea() {
      return Math.pow(this.side, 2);
    }

    toString() {
      return `side: ${this.shide} ${super.toString()}`;
    }

    static fromArea() {
      return new Square(Math.sqrt(area));
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    calculateArea() {
      return Math.PI * Math.pow(this.radius)
    }

    toString() {
      return `radius: ${this.radius} ${super.toString()}`;
    }
  }

  const circle = new Circle(10);

  circle.toString(); // radius: 10

  circle.calculateArea(); // 314.1592653589793
```