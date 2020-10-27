# Undefined e Null

- O tipo **undefined** é retornado caso a _chave não seja encontrada_.
```javascript
  const book = {
    title: "Clean Code",
    author: "Robert C. Martin", 
    pages: 464,
    language: "English",
    available: true
  };
  
  console.log(book.publisher); // undefined
```

- É possível consultar uma determinada chave por meio do operador *in*.
```javascript
  console.log("title" in book); // true
  
  console.log("author" in book); // true
  
  console.log("pages" in book); // true 
  
  console.log("language" in book); // true  
  
  console.log("available" in book); // true
  
  console.log("publisher" in book); // FALSE
```

- **Não atribuir** undefined ou null com a intenção de apagar uma propriedade.
```javascript
  book.available = undefined;
 
  console.log(book); // { available: undefined }
 
  console.log("available" in book); // true
 
  ##### Mesmo comportamento acima se colocar null
```

- As propriedades de um objeto podem ser apagadas por meio de um operador chamado **delete**. (melhor forma de apagar) 
```javascript
  delete book.available;
```
ou
```javascript
  delete book["available"];
```