function attachEventListeners() {
    let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){
 console.log("Clicked Me", count++);
})
}
attachEventListeners();

function OnemoreEventListeners() {
document.getElementById("submit").addEventListener("click", function DOMCONTENTLOADED(){
    console.log("DOM has loaded");
})
}
OnemoreEventListeners();

// Add an event listener called DOMCONTENTLOADED , inside this add a call back function which 
//consoles "DOM has loaded"
//

//working:- whenever we click on button this xyz function will be pushed into the call stack
//closure is used to hide the data

//garbage collection and why do remove event listner
//most of eventListner  have closure which requires to hold lot of memory as a result 
//are page can be 
//get slow hence when we dont use these eventListner we delete it it is called garbage Collection