console.log('Carregou Estudo javascript');

//---------------------------------------------------------------
// Estudos array:
//---------------------------------------------------------------
const container = document.getElementById('container');

// Example: Doubling each number in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4,6, 8, 10]

const block1 = document.createElement('div');
block1.setAttribute('id', 'block');
const texto1 = document.createElement('h1');
texto1.setAttribute('id', 'idTxt');
texto1.textContent = 'Estudo Map';
block1.appendChild(texto1);

const texto2 = document.createElement('h1');
texto2.setAttribute('id', 'idTxt');
texto2.textContent = doubledNumbers;
block1.appendChild(texto2);

criaDiv(container,block1);




// Example: Filtering even numbers from an array
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 ===0);
console.log(evenNumbers); // Output: [2, 4]


const block2 = document.createElement('div');
block2.setAttribute('id', 'block');
const texto3 = document.createElement('h1');
texto3.setAttribute('id', 'idTxt');
texto3.textContent = 'Estudo Filter';
block2.appendChild(texto3);

const texto4 = document.createElement('h1');
texto4.setAttribute('id', 'idTxt');
texto4.textContent = evenNumbers;
block2.appendChild(texto4);

criaDiv(container, block2);





//---------------------------------------------------------------
// Control html:
//---------------------------------------------------------------
function criaDiv(container,childElement) {
  container.appendChild(childElement);
  return container;
}


//---------------------------------------------------------------
// Manipular DOM:
//---------------------------------------------------------------
let element;

//Obter elemento pelo ID:
element = document.getElementById('manipularDOM')
console.log(element);

//Add elemento:
//element.innerHTML ='<p>Novo HTML content</p>';
//console.log(element);

//Obter elemento pela class:
element = document.getElementsByClassName('manipularDOM')
console.log(element);

//Obter elemento pela class:
element = document.getElementsByTagName('span')
console.log(element);

//Obter elemento com seletor CSS:
element = document.querySelector('#manipularDOM .txtSpan')
console.log(element);

//Add text no elemento com seletor CSS:
element.innerText = 'Texto adicionado pelo js';

//Obter todos os elemento com seletor CSS:
let elements = document.querySelectorAll('.txtSpan')
console.log(elements);

//Set atributo:
element = document.querySelector('#manipularDOM .txtSpan')
element.setAttribute('class','classTeste');
element.style.color = 'red';
console.log(element);

//Adicionar elemento
let newElement = document.createElement('div');
console.log(newElement);

//Obter todos os elemento com seletor CSS:
let parentElement = document.getElementById('manipularDOM')
let childElement = document.querySelectorAll('.txtSpan')[2];
//Remove elemento:
parentElement.removeChild(childElement)
console.log(parentElement);
//Add elemento:
let childElement1 = document.querySelectorAll('.txtSpan')[3];
parentElement.appendChild(childElement1);

