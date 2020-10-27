# Template Literals

- Um template literal é uma forma de declarar uma String que **permite a interpolação de expressões**.

```javascript
  let host = "localhost";
  
  let port = "3000";
  
  let resource = "users";
  
  let url = "https://" + host + ":" + port + "/" + resource;
  
  console.log(url); // https://localhost:3000/users
```

- Melhor utilizado dessa forma:
```javascript
  url = `https://${host}:${port}/${resource}`;
```

- Além da interpolação de expressões é possível também declarar uma String multi linha, *sem a necessidade de caracteres especiais*.
```javascript
  let mesesDoAno = `0 - Jan
  1 - Feb
  2 - Mar
  3 - Abr
  ...`;
```

