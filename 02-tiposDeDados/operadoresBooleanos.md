# Operadores Booleanos

## Operadores de Comparação:
**==**, **===**, **!=**, **!==**, **<**, **>**, **<=** e **>=**.

- Cuidar com os operadores de comparação **==** e **!=**
```
  0 == ''; // true
  0 == '0'; // true
  false == undefined; // false
  false == null; // false
  null == undefined; // true
  1 == true; // true
  0 == false; // true
  0 == '\n'; // true
```

- Preferir sempre utilizar **===** e **!==**. Porque fazem diferenciação por *tipo*.
```
  0 === ''; // false
  0 === '0'; // false
  false === undefined; // false
  false === null; // false
  null === undefined; // false
  1 === true; // false
  0 === false; // true
  0 === '\n'; // false
```

## Operadores Lógicos
**||** e **&&**
```
  0 || 2; // 2
  1 || 2; // 1 
  1 && 2; // 2 
  0 && 2; // 0 
```

## Operador Ternário
**(expressão) ? true : false** 
- Usado em atribuições
```
  (10) ? 'good' : 'bad'; // 'good' 
  (0) ? 'good' : 'bad'; //  'bad'
```