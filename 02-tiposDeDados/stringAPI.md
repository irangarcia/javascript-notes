# String API

- *length*: Retorna o tamanho da String.
- *indexOf*: Retorna a primeira posição encontrada do caractere passado por parâmetro.
- *lastIndexOf*: Retorna a última posição encotnrada do caractere passado por parâmetro.
- *toUpperCase*: Retorna uma nova String convertendo as letras para maiúsculas.
- *toLowerCase*: Retorna uma nova String convertendo as letras para minúsculas.

```javascript
  "JavaScript".length(); // 10
  
  "PHP".indexOf("P"); // 0 (primeira posição)
  
  "PHP".lastIndexOf(P); // 2 (última posição)
  
  "cobol".toUpperCase(); // 'COBOL'
  
  "ALGOL".toLowerCase(); // 'algol'
```

- *charAt*: Retorna o caractere na posição passada por parâmetro.
- *charCodeAt*: Retorna o código com base na posição passada por parâmetro.
- *fromCharCode*: Retorna um caractere com base no código passado por parâmetro.

```javascript
  "JavaScript".charAt(1); // 'a'
  
  "JavaScript".charCodeAt(1); // 97 
  
  String.fromCharCode(97); // 'a'
```

- *Relações de Verificação*:
  - *includes*: Retorna verdadeiro se a String contém a String passada por parâmetro.
  - *startsWith*: Retorna verdadeiro se a String inicia com a String passada por parâmetro.
  - *endsWith*:  Retorna verdadeiro se a String termina com a String passada por parâmetro.

```javascript
  "JavaScript".includes("Java"); // true
  
  "Ruby".startsWith("R"); // true
  
  "Erlang".endsWith("Lang); // true
```

.*localeCompare*: Retorna -1 se a String passada por parâmetro for maior, 0 se for igual e 1 se for menor. 

```javascript
  "C++".localeCompare("Ruby"); // -1 (Ruby é maior que C++)
  
  "Python".localeCompare("Java"); // 1 (Java é menor que Python)
  
  "JavaScript".localeCompare("JavaScript"); // 0 (São iguais)
```

- *match*: Retorna partes da String com base na RegExp passada por parâmetro.
- *search*: Retorna a primeira posição encotrada com base na RegExp passada por parâmetro. (**Só aceita valores de RegExp**)
- *replace*: Retorna uma nova String resultante da substituição da String ou RegExp passada no primeiro parâmetro pelo segundo parâmetro.

```javascript
  "C++".match(/\+/g); // '+', '+'
  
  "Java".search(/a/); // 1 
  
  "JavaScript".replace("Java", "Ecma"); // 'EcmaScript'
  
  "JavaScript".replace(/a/g, 4); // 'J4v4Script'
```

- *slice*: Retorna uma parte da String que está invocando a função iniciando na posição passada no primeiro parâmetro até a posição final passada no segundo parâmetro, ou da posição passada no primeiro parâmetro até o fim caso o segundo parâmetro não seja informado.
- *split*: Retorna um array contendo o resultado da divisão da String original de acordo com o critério passado por parâmetro.
- *substring*: Similar ao slice, não aceita valores negativos como parâmetro e permite a inversão dos parâmetros.

```javascript
  "JavaScript".slice(0, 4); // 'Java' (Não inclui a posição final.)
  
  "JavaScript".slice(4); // 'Script'
  
  "JavaScript".slice(0, -6); // 'Java' (Sinal negativo vai ao contrário)
  
  "JavaScript".slice(-6); // 'Script' (Sinal negativo ao contrário)
  
  "C;Java;JavaScript;Ruby".split(";"); // [ 'C', 'Java', 'JavaScript', 'Ruby' ]
  
  "JavaScript".substring(0, 4); // 'Java'
  
  "JavaScript".substring(4, 0); // 'Java'
  
  "JavaScript".substring(4); // 'Script'
```