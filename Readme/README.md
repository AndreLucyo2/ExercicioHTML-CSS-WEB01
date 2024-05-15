
# Estudos WEB

## Testando seletores no console do devtools do navegador

Links referencia:
  [The Document Object - w3schools](https://www.w3schools.com/jsref/dom_obj_document.asp).

------

Lista de algumas funções presentes no objeto document

- **Seletores de Elementos:**
  - `document.getElementById(id)`  
  - `document.getElementsByClassName(className)`
  - `document.getElementsByTagName(tagName)`
  - `document.querySelector(selector)`
  - `document.querySelectorAll(selector)`  

- **Manipulação de Conteúdo:**
  - `document.createElement(tagName)`
  - `document.createTextNode(text)`
  - `element.appendChild(childElement)`
  - `element.removeChild(childElement)`
  - `element.innerHTML`
  - `element.innerText`
  - `element.textContent`
  
- **Manipulação de Estilos:**
  - `element.style`
  - `element.classList.add(className)`
  - `element.classList.remove(className)`
  - `element.classList.toggle(className)`

- **Eventos:**
  - `element.addEventListener(event, callback)`
  - `element.removeEventListener(event, callback)`

- **Atributos e Propriedades:**
  - `element.getAttribute(attributeName)`
  - `element.setAttribute(attributeName, value)`
  - `element.removeAttribute(attributeName)`
  - `element.propertyName` (por exemplo, `element.value`, `element.src`, etc.)

- **Navegação pelo DOM:**
  - `element.parentElement`
  - `element.children`
  - `element.previousElementSibling`
  - `element.nextElementSibling`

- **Manipulação de Classes:**
  - `element.classList.add(className)`
  - `element.classList.remove(className)`
  - `element.classList.toggle(className)`

- **Manipulação de Elementos de Formulário:**
  - `document.forms`
  - `element.value`
  - `element.checked`

- **Manipulação de Posição e Rolagem:**
  - `element.scrollTop`
  - `element.scrollIntoView(options)`

- **Outros:**
  - `document.title`
  - `document.head`
  - `document.body`
  - `document.documentElement`

Testando alterações pelo console e refletindo na tela

- No codigo abaixo, obtenho um elemento, e adiciono um borda para realça-lo na tela

    ```jsx
    //Obtem o elemento e sobe dois niveis:
    const element = document.querySelector('selector');
    
    if (element) {
      element.style.outline = '2px solid red'; // Adiciona uma borda
      element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Role a página para o elemento
    } else {
      console.log('Elemento não encontrado com o seletor especificado.');//Tratamento de erro.
    }
    ```

- No query seletor abaixo mostra os elementos correspondentes ao seletor, passando o mouse sobre o elemento retornado ele é evidenciado na pagina.
  [Link pagina para testar.](https://www.w3schools.com/jsref/dom_obj_document.asp)

    ```jsx
    document.getElementsByClassName('tnb-desktop-nav w3-bar-item')[0]

    //Resultado: HTML do elemento
    <nav class="tnb-desktop-nav w3-bar-item"></nav>
    ```

    ```jsx
    //Retorna todos os elementos h2 da pagina atual:
    document.querySelectorAll('h2');
    ```

- O seletor mais básico que podem ser feito:
  - Pela própria tag do elemento, tais como: h1,h2, p, li, div … etc
  - Seletor pelo id do elemento: #
    - o seletor pelo id da tag, deve ser precedido de #, exemplo :

      ```jsx
        document.querySelector('#btnClose');
      ```

  - Seletores pela classe do elemento: .nome_da_classe
    - é precedido de um ponto

      ```jsx
        document.querySelector('.date_end-date-picker');
      ```

- Seletores pela hierarquia da árvore do DOM
  - Pode ser criado um seletor para pegar os filhos específicos de uma classe
    Quero pegar todos os ‘a’ de uma determinada classe:

      ```jsx
        document.querySelectorAll('.utils_headingMd__gD1Ok a') //encontre totos os 'a' da classe
      ```

  - selecionar um elemento, subir um nível e depois obter o filho do tipo input

       ```jsx
        document.querySelector('.date_end-date-picker').parentNode.querySelector('input[type="text"]');
       ```

  - selecionar um elemento, subir um nível e depois obter o filho do tipo input e obter o valor

       ```jsx
        document.querySelector('[data-cy="date_begin-time-picker"]').parentNode.querySelector('.dx-texteditor-input').value;
       ```

  - selecionar um elemento, subir um nível e depois obter o filho pelo seu índice

       ```jsx
        document.querySelector('[data-cy="date_begin-time-picker"]').parentNode.childNodes[1].childNodes[0].childNodes[0].value;
       ```
