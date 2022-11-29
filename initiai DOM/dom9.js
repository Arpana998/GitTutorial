var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var items = document.getElementsByClassName('list-group-item');
//var Req = document.getElementsByTagName('input');
//var Input = document.getElementById('item');

//console.log(Input);


//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//Filter event
//filter.addEventListener('keyup'filterItems);
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var information = document.getElementById('information').value;
    
    //create new li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(information));

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

//filter items
function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    
    itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        var information = item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) != -1 || information.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    })
}




 



