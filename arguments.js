//Argument:
//argument is a array like object that contains values that passes to a function.

//1.positional arguments
// function greet(name,age)
// {
//     console.log(`My name is ${name} and my age is ${age}`)
// }
// greet("shruti",30);
//positional args where watever inputs we are passing function will accept in same format as we are passing in calling.

//2.default arguments

// function greet(name="shruti",age=30)
// {
//     console.log(`My name is ${name} and my age is ${age}`)
// }
// greet();

//3.Rest parameters: application in react ...prev jab use state padhenge.

// function print(...numbers)
// {
//     numbers.forEach((element)=>{
//         console.log(element)
//     })

//     }
// print(3,4,5,6,7,8,9)

// function sum(...nums)
// {
//     let sum=0;
//     nums.forEach((element)=>{
//         sum += element;
//     });
//         return sum;
//     }
// console.log(sum(3,4,5,6));

// Object destructuring: express me: req.body se information destructure karte waqt 
 //                           react me: props pass karte samay iska use dekha jayega

//  function greet({name="shruti",age=27}={})
//  {
//     console.log(`hi my name is ${name} and my age is ${age}`)
//  }
//  greet({age:20,name:"raj"})

 //object destructuring in function

 const person = {
    name: "shruti",
    age: 25
 }

//  function greet({name,age})
//  {
//     console.log(`hi my name is ${name} and my age is ${age}`)
//  }

function greet(person)
 {
    console.log(`hi my name is ${person.name} and my age is ${person.age}`)
 }
 greet(person)




