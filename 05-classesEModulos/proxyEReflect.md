# Proxy e Reflect

- Um Proxy é capaz de **interceptar** diversos tipos de operações em um objeto alvo.

 ```js
  function createArray() {
    return new Proxy ({}, {

    });
  }

  const languages = createArray();

  languages[0] = "Python";

  languages[1] = "Ruby";

  languages[2] = "JavaScript";
```

- Existem métodos, *chamados de trap*, para diversos tipos de eventos relacionados a um objeto, como:
  - apply
  - construct
  - defineProperty
  - deleteProperty
  - get
  - getOwnPropertyDescriptor
  - getPrototypeOf
  - has
  - isExtensible
  - ownKeys
  - preventExtensions
  - setPrototypeOf

- O método **set** é invocado quando uma propriedade é definida no objeto.

```js
  function createArray() {
    return new Proxy ({}, {
      set(target, key, value ) {
        target.length = target.length || 0;
        target.length++;
        target[key] = value; // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }
      }
    });
  }

  const languages = createArray();

  languages[0] = "Python";

  languages[1] = "Ruby";

  languages[2] = "JavaScript";
```