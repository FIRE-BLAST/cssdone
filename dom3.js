//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'blue';

//var titles = document.querySelectorAll('.title');
//console.log(titles);

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i < odd.length; i++)
//{
    //odd[i].style.backgroundColor = 'green';
//}

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'coral';
//console.log(itemList.parentNode);

//var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'Cornsilk';
//console.log(itemList.parentNode);

//console.log(itemList.childNodes);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'PowderBlue';

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello World';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello World';

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

var newDiv = document.createElement('div');

newDiv.className='hello';

newDiv.id = 'hello 1';

newDiv.setAttribute('title','hello div');

var newDivText = document.createTextNode('hello world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);
















