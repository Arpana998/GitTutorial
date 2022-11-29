//Add a new li element without the same class Name
//And try editing it with getelementsbyclassname and then by getelementbytagname

//get element by class name
var items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor = 'green';
items[0].textContent = "I am edited by getElementbyclassname";
items[4].style.color = "brown";

//get element by tag name
var li = document.getElementsByTagName('li');
items[1].textContent = "I am item no 2"
//items[4].textContent = "Item 5";
items[4].textContent = "I am newly added";
//items[4].style.color = "blue";


//QuerySelector (if we have more than one similar element like having multiple heading we can access only 1st element at a time)
//using # is imp
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #ccc';

var input = document.querySelector('input');
input.value = 'Diwali Bucket List';

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');// only first element will be red
item.style.color = 'red';