# RegExp

- As expressões regulares são estruturas formadas por uma **sequência de caracteres que especificam um padrão formal** que servem para *validar*, *extrair* ou mesmo *substituir* caracteres dentro de uma string. 
- Todos os tipos de expressões regulares são **object**.

- *Test*:
```javascript
  let regExp = /john@gmail.com/;
  
  let result = regExp.test("john@gmail.com);
  
  console.log(result); // true
```

- *Exec*:
```javascript
  let regExp = /john@gmail.com/;
  
  let result = regExp.exec("john@gmail.com);
  
  console.log(result); // ['john@gmail.com', index: 0, input: 'john@gmail.com']
``` 

### Metacaracteres

- *.* : Representa qualquer caractere.
- *\w*: Representa o conjunto [a-zA-Z0-9_]
- *\W*: Representa o conjunto [^a-zA-Z0-9_]
- *\d*: Representa o conjunto [0-9]
- *\D*: Representa o conjunto [^0-9]
- *\s*: Representa um espaço em branco.
- *\S*: Representa um não espaço em branco.
- *\n*: Representa uma quebra de linha.
- *\t*: Representa um Tab.

### Escapando de Caracteres Especiais

- ***\***: A barra é utilizada antes de caracteres especiais com o objetivo de escapá-los.

### Inicializando e finalizando com um determinado caractere 

- **^** Inicia com um determinado caractere.
- **$** Finaliza com um determinado caractere.

### Grupos de Caracteres 

- **[abc]**: Aaceita qualquer caracter dentro do grupo, nesse caso a, b e c.
- **[^abc]**: Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c.
- **[0-9]**: Aceita qualquer caractere entre 0 e 9.
- **[^0-9]**: Não aceita qualquer caractere entre 0 e 9. 

### Quantificadores 

- Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres. 
- **{n}**: Quantifica um número específico.
- **{n,}**: Quantifica um número mínimo.
- **{n,m}**: Quantifica um número mínimo e máximo.
- **?**: Zero ou Um.
- **Asterisco(*)**: Zero ou Mais.
- **+**: Um ou mais.

```javascript
  let regExp = /^[a-z]+@gmail\.com$/; // Um ou mais 
  
  let regExp = /^[a-z]{4}@gmail\.com$/; // Obrigatoriamente 4
```

### Grupos de Captura

- **()**: Determina um grupo de captura para realizar extração de valores de uma determinada String. 
  