/*parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild


Now go head and add HEllo word before Item Lister
Now go head and add HEllo word before Item 1*/

//TRAVERSING THE DOM (MOVING ROM PARENTS TO CHILD OR SIBLING OR VICE VERSA)
var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'pink';
//console.log(itemList.parentNode.parentNode);

//parent element and parent node are for most of the part are interchangable
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background = '#f4f4f4';
console.log(itemList.parentElement.parentElement);


//CHILDNODES
//console.log(itemList.childNodes);//childNodes and children can be used to adress similar element
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'I AM FIRST';
//itemList.lastElementChild.textContent = 'I AM LAST';

//NEXTSIBLINGS
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


//creatElement

//creat a div
var newDiv = document.createElement('div');

//addCLass
newDiv.className = 'hello';

//add Id
newDiv.id = 'hello1';

//add attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '50px';

//console.log(newDiv);

var newLi = document.createElement('Li');
newLi.className = 'insert';
var newLiText = document.createTextNode('Hello World');
newLi.appendChild(newLiText); 

var listGroupItem = document.querySelector('h2 .list-group')
var li = document.querySelector('li .list-group-item');
listGroupItem.insertBefore(newLi, li);


console.log(newLi);




















