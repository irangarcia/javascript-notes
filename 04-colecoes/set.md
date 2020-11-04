# Set

- Um Set é um objeto que **armazena elementos** únicos, que podem ser de qualquer tipo de dado.

```js
  const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);

  console.log(charsets); // Set { 'ASCII', 'ISO-8859-1', 'UTF-8'}

  Array.from(charsets); // ["ASCII", "ISO-8859-1", "UTF-8"]
```

### Operações

**size**: Retorna a quantidade de elementos.

**add**: Adiciona um elemento.

**forEach**: Itera sobre o set.

**has**: Retorna true se o elemento existir.

**delete**: Remove um elemento.

**clear**: Remove todos os elementos.