# Operador New

- Permite criar objetos por meio das funções construtoras e por meio das classes.

```
  const person1 = {
    name: "Linus Torvalds",
    city: "Helsinki",
    year: 1969
    getAge() {
      return (new Date()).getFullYear() - this.year;
    }
  };

  const person2 = {
    name: "Bill Gates",
    city: "Seatle",
    year: 1955
    getAge() {
      return (new Date()).getFullYear() - this.year;
    }
  };

  console.log(person1);
  
  console.log(person1.getAge()); // 51 
  
  console.log(person2);
  
  console.log(person2.getAge()); 65
```

- Como fazer para criar um objeto a partir da mesma estrutura?

### Função Fábrica

- A **função fábrica**, que é um tipo de padrão, *retorna um novo objeto após ser invocada diretamente*.

```
  const personPrototype = {
    getAge() {
      return (new Date()).getFullYear() - this.year;
    }
  };

  const createPerson = function(name, city, year) {
    const person = {
      name,
      city,
      year
    };
    Object.setPrototypeOf(person, personPrototype)

    return person
  };

  const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
  
  const person2 = createPerson("Bill Gates", "Seattle", 1955);

  ## Para visualizar o getAge em persons é preciso olhar para o Protótipo! \/

  console.log(person1.__proto__); // { getAge: [ Function: getAge] }
  
  console.log(person2.__proto__); // { getAge: [ Function: getAge] }
```

### Função Construtora

- A **função construtora** *retorna um novo objeto ao ser invocada por meio do operador new*.
- Por convenção, as funções construtoras começam com letra maiúscula


```
  const Person = function(name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
    this.getAge = function {
      return (new Date()).getFullYear() - this.year;
    }
  };

  const person1 = new Person("Linus Torvalds", "Helsinki", 1969);
  
  const person2 = new Person("Bill Gates", "Seattle", 1955);
```

- Toda função **tem uma propriedade chamada prototype**, que é vinculada ao \_\_proto\_\_ do objeto criado pelo operador new.


- Prototype != \_\_proto\_\_
- O \_\_proto\_\_ é a cadeia de protótipos do objeto de quem ele herda. 
- O prototype (é um objeto) *apenas* as funções tem e apenas as funções construtoras utilizam. É esse objeto que vai ser vinculado ao \_\_proto\_\_ e que vai ligar a cadeia de protótipos. E é passado e transmitido para todos os objetos criados pela função construtora

```
  ...
  Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year;
  }
```

```
  ...
  const _new = function(fn ...params) {
    const obj = {};

    Object.setPrototypeOf(obj, fn.prototype);

    fn.apply(obj, params);

    return obj;
  }

  const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
  
  const person2 = _new(Person, "Bill Gates", "Seattle", 1955);
```