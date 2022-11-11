var obj = {num : 5};

var Calculate = function(a,b,c){
    return this.num*a*b*c;
}
var arr = [1,2,3]

Calculate.call(obj,4)
console.log(Calculate.call(obj,4,5,6))

Calculate.apply(obj,arr)
console.log(Calculate.apply(obj,arr))

var bound = Calculate.bind(obj);
console.log(bound)
console.log(bound(1,2,3));

//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
//Dont pass in args. Read from 'this' and use BIND

var student = {Age : 10}

var Define = function(){
    return `student is ${this.Age} years old`;
}
var task = Define.bind(student);
console.log(task());
