function saveToLocalStorage(event){
    event.preventDefault();
    const ExpenseAmount = event.target.amount.value;
    const Describe = event.target.description.value;
    const Category = event.target.category.value;

    const obj = {
        amount: ExpenseAmount,
        description: Describe,
        category: Category
    
    }
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showNewExpensesOnScreen(obj);
}

function showNewExpensesOnScreen(Expenses){
    if(localStorage.getItem(Expenses.description) !== null)
        {
            removeExpensesFromScreen(Expenses.description);
        }
    const parentNode = document.getElementById('ListOfExpense');
    const childHTML = `<li id=${Expenses.description}>${Expenses.amount} - ${Expenses.description} - ${Expenses.category}
                       <button onclick = deleteExpenses('${Expenses.description}')> Delete Expenses </button>
                       <button onclick = EditExpensesDetails('${Expenses.amount}','${Expenses.description}','${Expenses.category}')> Edit </button>
                       </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteExpenses(description)
{
    localStorage.removeItem(description);
    removeExpensesFromScreen(description);

}

function removeExpensesFromScreen(description)
{
    const parentNode = document.getElementById('ListOfExpense');
    const childNodeToBeDeleted = document.getElementById(description);
    if(childNodeToBeDeleted)
    {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

function EditExpensesDetails(amount,description,category)
{
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
}