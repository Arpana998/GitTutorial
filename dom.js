//console.dir(document);
//console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "Required Information";//it changes title bar above url
console.log(document.all);
console.log(document.all[14]);
document.all[14].textContent = "Fill the all items";//replace the existing text


var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerText = "How are you doing";
headerTitle.textContent = "Required to provide you seamless service"
headerTitle.style.borderBottom = 'solid 3px #000';//underlined the heading with black line

var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';


//GET_ELEMENT_BY_CLASS_NAME{it helps to acess plural elements}
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].textContent = 'ADD ITEM';
items[0].style.color = 'green';
items[0].style.fontWeight = 'bold';


