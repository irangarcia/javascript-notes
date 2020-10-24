10 -> 10
9.9 -> 9.9
0xFF -> 255
0b11 -> 3
010 -> 8
0X1A -> 26

new Number(10);   // 10
new Number(9.9);  // 9.9
new Number(0xFF); // 255
new Number(0b11); //3
new Number(010);  // 8
new Number(0X1A); // 26

(123.4).toExponential(10) // 1.2340000000+2
(123.4).toPrecision(10) // 123.4000000 (completa até o total de números ser 10)
(10).toFixed(2) // 10.00 casas após a virgula
