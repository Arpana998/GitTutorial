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
    //localStorage.setItem(obj.description, JSON.stringify(obj));
    //showNewExpensesOnScreen(obj);
    axios.post("https://crudcrud.com/api/6605dd0af62444418624dba895ae3c00/expenseTracker", obj)
       .then(response => {
            showNewExpensesOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            document.body.innerHTML =document.body.innerHTML + "<h> something went wrong </h>"
            console.log(err)
        })
    
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/6605dd0af62444418624dba895ae3c00/expenseTracker")//no need to pass obj
       .then((response) => {
           console.log(response)
           for(var i=0; i< response.data.length; i++){
            showNewExpensesOnScreen(response.data[i]);
           }
       })
       .catch((error) => {
        console.log(error)
       })

})
    



function showNewExpensesOnScreen(Expenses){
  /*  if(localStorage.getItem(Expenses.description) !== null)
        {
            removeExpensesFromScreen(Expenses.description);
        }*/
    const parentNode = document.getElementById('ListOfExpense');
    const childHTML = `<li id=${Expenses._id}>${Expenses.amount} - ${Expenses.description} - ${Expenses.category}
                       <button onclick = deleteExpenses('${Expenses._id}')> Delete Expenses </button>
                       <button onclick = EditExpensesDetails('${Expenses.amount}','${Expenses.description}','${Expenses.category}','${Expenses._id}')> Edit </button>
                       </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}





function deleteExpenses(ExpensesId)
{
    axios.delete(`https://crudcrud.com/api/6605dd0af62444418624dba895ae3c00/expenseTracker/${ExpensesId}`)
    .then((response) => {
        console.log(response)
        removeExpensesFromScreen(ExpensesId);
    })
    .catch((err) => {
        console.log(err)
    })
    //localStorage.removeItem(description);
    //removeExpensesFromScreen(description);

}

function removeExpensesFromScreen(ExpensesId)
{
    const parentNode = document.getElementById('ListOfExpense');
    const childNodeToBeDeleted = document.getElementById(ExpensesId);
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


    deleteExpenses(ExpensesId)
}