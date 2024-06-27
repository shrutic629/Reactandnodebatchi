//types of variable declaration
//let,var,const
//let , const = block scope
//-variable only accessible in block
//var = function scope
//-variable is accessible throughout the function,in different blocks also.
{
    let a = 10;
    console.log(a); //10
}
console.log(a); //undefined
//here a is not defined outside the block.

{
    var a = 10;
    console.log(a); //10
}
console.log(a); //10
//here a is defined outside the block because var is function scoped.
//function ka lower level meaning stack hota hai
//main stack , side stack

//main ek body hai usme side stack ek function kehlata hai


//hoisting
//variable ko declare kiye bina usko use kar lena hoising concept hai
console.log(c) //undefined
var c = 30;

a();
var a = ()=>{
    console.log(b);
}

var b = 20;

//Types of function calling in Javascript
//1.Function declaration or named function

function add(a,b) //naming function
{
    return a+b;
}
console.log(add(3,2));

//Function Expression

//const can be redeclare or reassign
var add = function(a,b) //anonymous function using var
{
    return a+b;
}

console.log(add(2,3));

//const cannot be redeclare but can reassign
let add = function(a,b) //anonymous function using let
{
    return a+b;
}

console.log(add(2,3));

//const cannot be redeclare or reassign
const add = function(a,b) //anonymous function using const
{
    return a+b;
}

console.log(add(2,3));


//Arrow function

var add = (a,b)=>{
    return a+b;
}

console.log(add(2,4)) //same for let and const


//Immediately Invoked Function Expression(IIFE)

var result = (function (a,b){
    return a+b;
})(2,7);

console.log(result) //same for let and const

//function constructor
//what si constructor
//A constructor is a special method that is automatically called when an object is created from a class.
// default , parametarised, copy constructor.

function add(a,b)
{
    this.a = a;
    this.b = b;
    this.result = function()
    {
        return this.a + this.b
    }
}

add(3,5) //parameterised constructor