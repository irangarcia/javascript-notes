# IEEE 754

- É um *padrão de representação numérica* criado em 1985 e adotado por diversas linguagens de programação como o JavaScript, Ruby, Python e Java. 
- Um dado é armazenado em 64 bits em JS. 1 bit é de sinal, 11 são de expoentes (ordem de grandeza) e 52 de frações (número em si).
  
- Cuidardo com operações envolvendo números. 
- Ao realizar operações com números decimais, **podem existir resíduos decorrentes de arredondamento**.
```
  0.1 + 0.2; // 0.3000000000004
  666.7 - 666.6; // 0.10000000002274
  33.3 * 3; // 99.899999999999999999
  12.2 / 0.1; // 121.999999999999999
```
- IEEE 754 Calculator 

- LowDash (biblioteca para resolver o problema)
- **Infinity**, que pode ser positivo ou negativo, é retornado quando uma operação ultrapassa os limites do tipo number.
```
  1/0; // Infinity
  Math.pow(10, 1000); // Infinity
  Number.MAX_VALUE * 2; // Infinity
  Math.log(0); // Infinity
  -Number.MAX_VALUE * 2; // -Infinity
```

- **NaN** ou Not a Number, é retornado quando realizamos uma operação numérica *onde não é possível determinar o resultado*.
``` 
  10 * "JavaScript"; // NaN
  0/0; // NaN
  Math.sqrt(-9); // NaN
  Math.log(-1); // Nan
  parseFloat("JavaScript"); NaN
```