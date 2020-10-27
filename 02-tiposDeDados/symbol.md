# Symbol 

- O tipo Symbol é primitov, único e imútavel, atuando como uma *chave única* em um objeto.
- Chegou no ES6 (ECMAScript 2015)
  
```javascript
  Symbol("a"); // Symbol(a)
  
  Symbol("b"); // Symbol(b) 
  
  Symbol("c"); // Symbol(c)
```

- Symbols não são iguais.
- Além disso, é utilizado em operações realizadas pelo interpretador, como no comando *for/of* ou em operações da String API como *match*, *split*, *replace* e muitas outras.

```javascript
  Symbol.hasInstance; // Symbol(Symbol.hasInstance)
  
  Symbol.match; // Symbol(Symbol.match)
  
  Symbol.replace; // Symbol(Symbol.replace)
  
  Symbol.search; // Symbol(Symbol.search)
```