# Modules

- No ES6, foi especificado na própria linguagem, baseado no conceito de **importação** e **exportação**.

```js
  // example.js
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get area() {
      return PI * pow(this.radius, 2);
    }
  }

  const circle = new Circle(10) // Circle { radius : 10 }

  circle.area; // 314.159.....
```

- Por meio da palavra-chave **export** é *possível exportar qualquer tipo de dado existente dentro de um módulo*.

```js
  // math.js
  export const PI = 3.141592;

  export function pow(base, exponential) {
    if(exponential === 0) return 1;
    return base * pow(base, exponential - 1); 
  }
```

- A palavra-chav **import** *faz a importação de qualquer tipo de dado expxortado para dentro do módulo*.

```js
  // example.js
  import {PI, pow} from './math'; // Unexpected token
```

- **CUIDADO!!!** Para utilizar modules no Node.js os arquivos devem ter a extensão **.mjs** além de executar com a flag --experimental-modules.

```js
  // math.js >> math.mjs
  // example.js >> example.mjs
  // node --experimental-modules example.mjs
```

- É possível utilizar um **alias** na importação, renomeando o que estiver sendo importado.

```js
  import {PI as pi, pow} from './math';
```

- Por meio do **\*** é possível *importar tudo que estiver sendo exportado em um único objeto*.

```js
  import * as math from './math';

  math.x
  math.y
```

- Também podemos importar e exportar de forma padrão utilizando a palavra-chave **default**.

- A ordem da importação é relevante? **Não**, pois ele sofre hoisting e é pré-inicializado!

- Não é permitido realizar import e export dentro de blocos! É necessário estar no top level.