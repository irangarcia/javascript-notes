# Herança

- O principal objetivo da herança é **permitir o reuso de código** *por meio de compartilhamento de propriedades* entre objetos, **evitando a duplicação**.
- Na linguagem JavaScript a herança é realizada entre *objetos* e não classes. Conhecida também como herança baseada em *protótipos*.

- A propriedade **\_\_proto\_\_** é uma referência para o protótipo do objeto. Ele procura o de cima que é o protótipo referenciado, caso não ache vai para o Object e caso não ache, o \_\_proto\_\_ padrão é *null*.

```
  const functionalLanguage = {
    paradigm: "Functional"
  };
  
  const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
  };
  
  const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
  };
  
  console.log(functionalLanguage);
  
  console.log(scheme); // Não exibe o paradigma no log, mas possui a propriedade.
  
  console.log(javascript); // Não exibe o paradigma no log, mas possui a propriedade.
``` 

- O método **hasOwnProperty** pode ser utilizado para determinar se uma propriedade _pertence ao objeto_.

```
  const functionalLanguage = {
    paradigm: "Functional"
  };
  
  const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
  };
  
  const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
  };
  
  for (let key in scheme) {
    console.log(key); // name year paradigm ---> ou seja, ele também percorre o protótipo
    console.log(key, scheme.hasOwnProperty(key)); // name true, year true, paradigm false
  };
```

## MELHOR FORMA
- Os métodos **Object.setPrototypeOf** e *Object.getPrototypeOf* permitem a interação com o protótipo do objeto. 

```
  const functionalLanguage = {
    paradigm: "Functional"
  };
  
  const scheme = {
    name: "Scheme",
    year: 1975,
  };
  
  const javascript = {
    name: "JavaScript",
    year: 1995,
  };
  
  ### Object.setPrototypeOf(scheme, functionalLanguage);
  
  ### Object.setPrototypeOf(javascript, functionalLanguage);
```

- Com o método **Object.create** é possível criar um objeto passando o seu protótipo por parâmetro.

```
  const functionalLanguage = {
    paradigm: "Functional"
  };

  const scheme = Object.create(functionalLanguage);
  
  scheme.name = "Scheme";
  
  scheme.year = 1975;

  const javascript = Object.create(functionalLanguage);
  
  javascript.name = "JavaScript";
  
  javascript.year = 1995;
```

- **Cuidado!** Usar o Object.create sem o seu protótipo o objeto perde algumas operações importantes!

- Caso a mesma propriedade exista no objeto e no seu protótipo, *a propriedade do próprio objeto é retornado*, fazendo sombra à propriedade do protótipo. (Shadowing)

``` 
  const functionalLanguage = {
    paradigm: "Functional"
  };

  const javascript = Object.create(functionalLanguage);
  
  javascript.name = "JavaScript";
  
  javascript.year = 1995;
  
  javascript.paradigm = "OO";

  for (let key in javascript) {
    console.log(key, javascript[key]); // name.....paradigm: 'OO'
  };
```