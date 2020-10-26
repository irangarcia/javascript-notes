# Number

- O number é primitivo, imutável e é representado internamente pelo padrão *IEEE 754* de 64 bits.
- Contras: menos possibilidades de economizar memória.
- Suporta os sistemas de numeração *decimal*, *hexadecimal*, *binário* e *octal*.
  -> O sistema de numeração **decimal**, de base 10, deve iniciar com um número de 1 a 9, seguido por números de 0 a 9 com ou sem ponto, indicando se é inteiro ou decimal.
  -> O sistema de numeração **hexadecimal**, de base 16, deve inciiar com 0x ou 0X, seguido por números de 0 a 9 e letras de A a F.
  -> O sistema de numeração **binário**, de base 2, deve iniciar com 0b ou 0B, seguido por números de 0 a 1. É lido da direita para a esquerda.
  -> O sistema de numeração **octal**, de base 8, deve iniciar com 0, 0o ou 0O seguido por números de 0 a 7.
```
new Number(10);   // 10
new Number(9.9);  // 9.9
new Number(0xFF); // 255
new Number(0b11); //3
new Number(010);  // 8
new Number(0X1A); // 26
```


- Os métodos *toExponential*, *toFixed* e *toPrecision* podem ser utilizados para mudar a forma como um número representado.
```
  (123.4).toExponential(10) // 1.2340000000+2
  (123.4).toPrecision(10) // 123.4000000 (completa até o total de números ser 10)
  (10).toFixed(2) // 10.00 casas após a virgula
```