
//Make the 2nd item have green background color
//Make the 3rd item invisible
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL﻿
//What is the difference between queryselector and queryselectorall?
//QUERYSELECTOR (IT Will access 1st element by default when element is not specified)
var item = document.querySelector('.list-group-item')
item.style.color = 'blue';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');//dose not count from 0
secondItem.style.backgroundColor = 'green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display = 'none';

//QUERYSELECTORALL {can grab more than one thing}
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Name';

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}



