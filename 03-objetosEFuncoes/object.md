# Objeto

- Um objeto é uma **coleção dinâmica de propriedades** definidas por *chaves*, que podem ser do tipo String ou Symbol, e *valores* que podem ser de qualquer tipo de dado.
- É possível criar objetos de várias formas: pela *notação literal*, por meio de uma *função construtora* ou do *método create da Object API.*

```javascript
  {};
  
  new Object();
  
  Object.create(null); 
```

- Uma das diversas maneiras de atribuir propriedades a um objeto é _durante sua inicialização_, pela **notação literal**.

```javascript
  const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
  }
``` 

- **Shorthand Notation**. Simplificação de variáveis para dentro do Objeto. (ES6)
- Variável com mesmo nome da chave é possível simplificar:
  
```javascript
  const title = "Clean Code";
  const author = "Robert C. Martin";
  const pages = 464;
  const language = "English";
  const available = true;
  
  const book = {
    title,
    author,
    pages,
    language,
    available
  };
```
 
- **Cuidado!** Dependendo da chave é necessário declará-la diretamente como String.

- Também é possível computar as chaves em *tempo de execução*.
```javascript
  const key1 = "title";
  const key2 = "author";
  const key3 = "pages";
  const key4 = "language";
  const key5 = "available";
  
  const book = {
    [key1] "Clean Code",
    [key2] "Robert C. Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
  };
```

- Além da notação literal, é possível atribuir propriedades aos objetos **por meio da sua referência**.
  
```javascript
  const books = {}; 
  books.title = "Clean Code";
  books.author = "Robert C. Martin";
  books.pages = 464;
  books.language = "English";
  books.available = true;  
```

- Assim como na notação literal, é possível computar as chaves de um objeto **em tempo de execução por meio da sua referência**.
  
```javascript
  const key1 = "title";
  const key2 = "author";
  const key3 = "pages";
  const key4 = "language";
  const key5 = "available";
  
  const book = {};
  
  books[key1] = "Clean Code";
  books[key2] = "Robert C. Martin";
  books[key3] = 464;
  books[key4] = "English";
  books[key5] = true;  
```

- Cada uma das propriedades de um objeto podem ser consultadas por meio da sua referência, **de forma direta**.
  
```javascript
  const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
  };

  console.log(book.title);
  console.log(book.pages);
```

- É possível consultar cada uma das propriedades de um objeto por meio da **computação das chaves**. For in para percorrer chaves. 
  
- **Exemplo 1**:
```javascript
  const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
  };
  
  for (let key in book) {
    console.log(key); // Imprime todas as Chaves.
    console.log(book[key]) // Imprime todos os Valores.
  };
```

- **Exemplo 2**:
```javascript
  const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
  };
  
  const book2 = {};
  
  for (let key in book1) {
    book2[key] = book1[key];
  };
  
  console.log(book2); // book1 
```

