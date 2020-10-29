# WeakMap

- Weakmap é um objeto, similar ao map, que **permite APENAS chaves do tipo Object** e *mantém as referências de forma fraca*, sendo volátil e não iterável.

```js
  const wm1 = new WeakMap();

  console.log(wm1); // WeakMap {}
```

### Operações

<br>

- **set**: Adiciona um par de chave e valor.

```js
  const wm1 = new WeakMap();

  const obj1 = {};

  const obj2 = {};

  wm1.set(obj1, "obj1");

  wm1.set(obj2, "obj2");

  console.log(wm1); // Não irá mostrar os objetos ali dentro.
```
<br>

- **has**: Retorna true se a chave existir.

```js
  (...)

  wm1.has(obj1); // true

  wm1.has(obj2); // true
```
<br>

- **get**: Retorna o valor de uma determinada chave.

```js
  (...) 

  wm1.get(obj1); // obj1

  wm1.get(obj2); // obj2
```

<br>

- **delete**: Remove um par de chave e valor.

```js
  (...)

  wm1.delete(obj1); 

  wm1.delete(obj2);
```
<br>
   
- Sem a **referência para a chave** não é possível acessar o valor.

- O WeakMap serve para poder implementar uma coleção com referência fraca para que não tenha que se preocupar em remover esses elementos dela utilizando cache.

```js
  const areas = new WeakMap();

  const rectangle = {
    x: 10,
    y: 2
  };
  
  const rectangle2 = {
    x: 5,
    y: 3
  };

  function calculateArea(rectangle) {
    if (areas.has(rectangle)) {
      console.log("Using cache...");
      return areas.get(rectangle);
    }
    
    const area = rectangle.x * rectangle.y;

    areas.set(rectangle, area);

    return area;
  };

  calculateArea(rectangle1); // 20
  calculateArea(rectangle1); // Using cache... 20
  calculateArea(rectangle2); // 15
```