# Promises

- As promises são **objetos responsáveis por modelar comportamento assíncrono**, permitindo o seu tratamento de uma forma mais fácil e direta. 

```js
  function sum(a, b, callback) {
    setTimeout(function () {
      callback(a + b);
    }, 1000)
  }

  sum(4, 2, function (result) {
    console.log(result);
  }); // 4
```

- Para criar uma promise basta instanciá-la, executando a função **resolve** em caso de sucessom sendo tratado por meio de **then**.

```js
  function sum(a, b) {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve(a+b);
      }, 1000);
    });
  };

  sum(2,2).then(function(a) {
    sum(4,4).then(function(b) {
      sum(a, b).then(function(result) {
        console.log(result);
      });
    });
  });
```

- Em caso de fracasso, a função **reject** deve ser executada, sendo tratada por meio de **catch**.

```js
  function sum(a, b) {
    return new Promise(function(resolve, reject) {
      if (!a || !b) return reject("Invalid input");
      setTimeout(function() => {
        resolve(a+b);
      }, 1000);
    });
  };

  sum(2,2).then(function(a) {
    sum(4,4).then(function(b) {
      sum().then(function(result) {
        console.log(result);
      });
    }).catch(function(e) {
      console.log(e);
    });           
  });
```

- É possível **centralizar** o tratamento de uma promise *encadeando seus retornos*.

```js
  sum(2,2).then(function(a) {
    return sum(4,4).then(function(b) {
      return sum(a, b).then(function(result) {
        console.log(result);
      });
    });        
  }).catch(function(e) {
      console.log(e);
  });   ;
```

- Podemos executar várias promises ao mesmo tempo usando o **Promise.all**.