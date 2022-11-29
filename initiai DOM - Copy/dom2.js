//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';


//by using items.style.fontWeight = 'bold' we cannot convert all items into bold we reuire for loop to access elements
for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}
