# Conversão Numérica

- A forma mai ssimples de converter um número é por meio da invocação da função construtora **Number**.


```
Number("10"); // 10
Number("9.9"); // 9.9
Number("0xFF"); // 255
Number("0B10"); // 2
Number("0o10"); // 8
Number(); // 0
Number("JavaScript"); // NaN
```

- Conversão através de **operadores numéricos**:
```

~~"10"; // 10
+"10";  // 10 
"10"-0; // 10
"10"*1; // 10
"10"/1; // 10
!!!!!!!!!!!!!
   CUIDADO 
!!!!!!!!!!!!!
"10"+0 // 100 

```
- Nem todos os operadores numéricos realizam a conversão de tipo.

- **toString**:
```
  (0xA).toString(10); // Conversão para base *decimal*
  (0b1010).toString(16); // Conversão para base *hexadecimal*
  (010).toString(2); // Conversão para base *binária*
  (10).toString(8); // Conversão para base *octal*
```

- O método **parseInt** permite converter uma String para um número. Para isso basta indicar o *número e a sua base*, que caso não seja informada será 10. Normalmente é perdido a casa decimal
```
  parseInt("10") // 10 
  parseInt("10", 10) // 10
  parseInt("9.9, 10); // 9
  parseINt("A", 16); // 10
  parseInt("11", 2); // 3 
  parseInt("010", 8); // 8
```

- O método **parseFloat** é um pouco mais específico e *converte apenas números no sistema de numeração decimal*.
```
  parseFloat("10"); // 10
  parseFloat("9.9); // 9
  parseFloat("0xFF"); // 0 (Pega apenas os números a esquerda)
  parseFloat("0b10"); // 0 
```