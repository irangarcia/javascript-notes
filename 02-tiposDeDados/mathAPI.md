# Math API

- Math é um objeto global que contém constantes matemáticas e métdos para a realização de operações envolvendo números. 
  
- **Constantes**:
```
  Math.E; // Número de Euler
  
  Math.LN10; // Logaritmo Natural de 10
  
  Math.LN2; // Logaritmo Natural de 2
  
  Math.LOG10E; // Logaritmo de E na base 10
  
  Math.LOG2E; // Logaritmo de E na base 2
  
  Math.PI; // Pi
  
  Math.SQRT1_2; // Raiz quadrada de 1/2 
  
  Math.SQRT2; // Raiz quadrada de 2
```
- **Operações**:
  - *abs*: Converte o sinal do número para positivo.
  - *ceil*: Arredonda o número para cima.
  - *floor*: Arredonda o número para baixo.
  - *round*: Arredonda o número para cima se a parte decimal for de 5 a 9 e para baixo se for de 0 a 4.
  - *sign*: Retorna 1 se o número for positivo e -1 se for negativo.
  - *trunc*: Elimina a parte decimal do número, tornando-o um inteiro.
```
  Math.abs(10); // 10
  
  Math.abs(-10); // 10
  
  Math.ceil(1.1); // 2
  
  Math.ceil(-1.1); // -1
  
  Math.floor(9.9); // 9
  
  Math.floor(-9.9); // -10
  
  Math.round(4.5); // 5
  
  Math.round(-4.5); // -4 (Mudança de comportamento)
  
  Math.sign(5); // 1
  
  Math.sign(-5); // -1
  
  Math.trunc(2.3); // 2
  
  Math.trunc(-2.3); // -2
```

- **Operações Aritméticas**:
  - *cbrt*: Retorna a raiz cúbica do número.
  - *cos*: Retorna o coseno de um angulo.
  - *exp*: Retorna E elevado a um expoente.
  - *hypot*: Retorna a raiz quadrada dos números.
  - *log*: Retorna o logaritmo do número em base natural.
  - *pow*: Retorna o número elevado a um determinado expoente.
  - *sin*: Retorna o seno de um ângulo.
  - *sqrt*: Retorna a raiz quadrada de um ângulo.
  - *tan*: Retorna a tangente de um ângulo.
```
  Math.cbrt(8); // 2
  
  Math.cos(Math.PI/3); // 0.5
  
  Math.exp(1); // 2.71828182
  
  Math.hypot(3,4); // 5
  
  Math.log(1); // 0
  
  Math.pow(2,10); // 1024 
  
  Math.sin(Math.PI/2); // 1
  
  Math.sqrt(4); // 2
  
  Math.tan(Math.PI/4); // 1
```

- **Outros**:
  - *min*: Retorna o menor número passado por parâmetro.
  - *max*: Retorna o maior número passado por parâmetro.
  - *random*: Retorna um número randômico entre 0 e 1, não incluindo o 1. 
``` 
  Math.min(1,2,3,4,5,6); // 1 
  
  Math.max(1,2,3,4,5,6); // 6
  
  Math.random(); // Número randômico
```