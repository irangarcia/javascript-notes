# Map

- O Map é um objeto que amarazena um conjunto de **chaves** e **valores** que podem ser de qualquer tipo de dado.

```js
  const timeUnits = new Map([["seconds", 1], ["minute", 60], ["hour", 3600]]);

  console.log(timeUnits);
```

<br>

- **size**: Retorna a quantidade de elementos.
  
```js
  const timeUnits = new Map([["seconds", 1], ["minute", 60], ["hour", 3600]]);

  timeUnits.size; // 3 
```
<br>

- **set**: Adiciona um par de chave e valor.

```js
  const timeUnits = new Map();

  timeUnits.set("second", 1);

  timeUnits.set("minute", 60);

  timeUnits.set("hour", 3600);
```
<br>

- **forEach**: Itera sobre o mapa. Retorna valor e chave (nessa ordem).

```js
   (...)

   timeUnits.forEach(function (value, key) {
    console.log(key, value);
   }); 
```
<br>

- **has**: Retorna true se a chave existir.

```js
  (...)
  timeUnits.has("hour"); // true

  timeUnits.has("day"); // false
```
<br>

- **get**: Retorna o valor de uma determinada chave. Se não existir retorna undefined.

```js
  (...)

  timeUnits.get("second"); // 1

  timeUnits.get("hour"); // 60

  timeUnits.get("year"); // undefined
```
<br>

- **delete**: Remove um par de chave e valor.

```js
  (...)

  timeUnits.delete("hour"); // Retorna true caso tenha sido deletado
```
<br>

- **clear**: Remove todos os elementos.

```js
  timeUnits.clear(); // 

  console.log(timeUnits); // Map {}

  console.log(timeUnits); // 0
```
<br>

- Qual é a diferença para um objeto?
  - As chaves do Map podem ser de qualquer tipo.

```js
  // Objeto
  const obj = {};

  obj[10] = "number"; // String
 
  obj["10"] = "String"; // String - Sobrescreve o de cima

  obj[true] = "Boolean"; // String

  obj["true"] = "String"; // String - Sobrescreve o de cima

  console.log(obj); // { '10': 'String', 'true': 'String' }
```

```js
  // Map
  const map = new Map();

  map.set(10, "Number");

  map.set("10", "String");

  map.set(true, "Boolean");

  map.set("true", "String");

  map.get(10); // Number

  map.get("10"); // String

  map.get(true); // Boolean

  map.get("true"); // String
```

