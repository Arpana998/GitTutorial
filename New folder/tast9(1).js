//FUNCTION CURRYING
//let multiply = function (x, y) {
  //  console.log(x*y);
//}
let multiply = function (x) {
    return function (y){
    console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(5);
multiplyByThree(10);

//let multiplyByTwo = multiply.bind(this, 2, 4)// 2 is the value passed for x
//multiplyByTwo(5);//5 is a value passed for y
//without passing 4 output was 10 as x=2 and y = 5
//but as we pass the value 4 y=4 and value assigned line below the function is ignored

//one way to do is bind method and another one is closure