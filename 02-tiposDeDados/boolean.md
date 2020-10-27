# Boolean

- O tipo Boolean é primitivo, imutável e representado pelas palavras reservadas **true** e **false**.
- **Tomar cuidado com a coersão de tipo**. A coersão de tipo acontece quando um tipo de dado é utilizado em um contexto onde ele é convertido de forma implícita e explícita.

- A função construtora: new Boolean(false) não é convertido para falso.
- Apenas esses são convertidos para *false*:
```javascript
  !!0; 
  
  !!NaN;
  
  !!""; 
  
  !!false; 
  
  !!undefined; 
  
  !!null; 
```

- *True*:
```javascript
  !!-10;
  
  !!"JavaScript";
  
  !!{};
  
  
  !![];
  
  !!/JavaScript/;
  
  !!new Date();
  
  !! function () {};
```