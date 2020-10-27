# Comparação de Objetos

- A comparação dos objetos é feita por meio da sua _referência_ (mesmo objeto em memória), assim, *ainda que dois objetos tenham exatamente as mesmas propriedades eles serão considerados diferentes*.
```
  const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
  };
  const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
  };
  console.log(book1 == book2); // false
  console.log(book1 === book2); // false
```

- Uma das formas para comparar objetos é **analisando cada uma das suas propriedades** por meio da comparação das chaves e valores.

```
  const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
  };
  const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
  };
  let equal = true;
  for (let key in book1) {
    if(book1[key] !== book2[key]) equal = false; 
  };
  for (let key in book2) {
    if(book1[key] !== book2[key]) equal = false;
  }
  console.log(equal);
```

- Para garantir que um objeto é igual ao outro é *necessário verificar seus protótipos*.