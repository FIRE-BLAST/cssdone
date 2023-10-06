var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'blue';

var titles = document.querySelectorAll('.title');
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}


