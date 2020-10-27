# Strings

- O tipo String é primitivo, imutável e é representado internamente pelo padrão **Unicode**, codificado em UTF-16.
- Existem 3 formas de declarar uma String de forma literal: *aspas simples*, *aspas duplas* ou *acento grave*.
- Também é possível declarar uma string por meio da sua *função construtora*.

```javascript
  'JavaScript';
  "JavaScript";
  `JavaScript`;
  new String('JavaScript');
```

- A função construtora é mais lenta e pode prejudicar a performance.
- Alguns tipos de caracteres não são permitidos e precisam ser escapados.

```javascript
  console.log("Usar aspas duplas dentro de ums string é necessário usar barras, aqui vai um exemplo: \"aqui\"");
  
  console.log('Outro exemplo com aspas simples. Aqui vai: mom\'s house');
  
  console.log(`O último exemplo é assim: \\n ou \\u000A`);
```

- É possível escrever caracteres utilizando seu code point no padrão Unicode.

