# Variáveis

- É possível declarar variáveis de diferentes formas, utilizando **var**, **let** e **const**. São palavras reservadas.
  
- Ciclo de vida de uma variável
  - **Declaração**: o nome da variável é registrado no contexto de execução, tambem conhecido como escopo, da função. (Registrar um nome)
  - **Inicialização**: A variável é inicializada com o valor undefined (ainda não tem valor definido). 
  - **Atribuição**: Um valor é atribuído para a variável (Quando é colocado o sinal de igual e é atribuído um valor específico).

## var
- Ao utilizar *var*, a variável é declarada na inicialização no escopo da função, ***não respeitando bloco e permitindo a redeclaração e reatribuição***.

## let
- Ao utilizar *let*, a variável é declarada no escopo da função mas só é inicializada posteriormente, ***respeitando bloco e permitindo reatribuição mas não a redeclaração***.

## const 
- Ao utilizar *const*, a variável é declarada no escopo da função mas só é inicializada posteriormente ***respeitando bloco e NÃO permitindo reatribuição NEM redeclaração***. 

- Ao declarar uma variável sem var, let ou const ela é criada no *escopo global*. NUNCA declarar.

- Um identificador válido deve começar com [a-zA-Z_\$] seguido por [a-zA-Z0-9_\$]
```javascript
## Válido
let name123;
let Name123;
let _name123;
let $name123;

## Inválido
let 123name123;
let @name123;
let "name123;
let 'name123;
```