var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var items = document.getElementsByClassName('list-group-item');
//var filter = document.getElementById('filter');
//console.log(itemList);
//console.log(itemList.childElement);
console.log(items)


//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//Filter event
//filter.addEventListener('keyup'filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button')

    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    //create edit button
    var EditBtn = document.createElement('button')
    EditBtn.className = 'btn btn-soft btn-sm float-rigth edit';
    
    EditBtn.appendChild(document.createTextNode('E'));

    li.appendChild(EditBtn);
}
//remove item
var items = document.getElementsByClassName('list-group-item');
function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}
for(var i = 0; i < items.length; i++)
{
    var EditBtn = document.createElement('button')
    EditBtn.className = 'btn btn-soft btn-sm float-rigth edit';
    
    EditBtn.appendChild(document.createTextNode('E'));

    items[i].appendChild(EditBtn);
}

//Filter Items
function filterItems(){
    //conver text to lower case
    var text = e.target.value.toLowerCase();
    //get lis
    var Items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
    })
}



