// 1. Passing and Printing Multiple Objects:
// You have several objects and need to pass them to a function. 
// Inside the function, use the rest operator to handle the objects 
// and print each one. Write the function and explain the process.

// function printobject(...objects)
// {
//     objects.forEach((object)=>{
//         console.log(object);
//     })
// }


// const obj1={ name:"Alice" };
// const obj2={ name:"Shruti" };
// const obj3={ name:"Raj" };

// printobject(obj1,obj2,obj3);

// ---------------------------------------------------------------

// 2.Summing Any Number of Arguments:
// Write a function that can take any number of arguments and return 
// their sum. Explain how the rest operator allows you to handle an 
// indefinite number of arguments and how you can iterate over them to 
// calculate the sum.(using foreach).

// const summation = (...nums)=>{
//     let sum = 0;
//     nums.forEach((num)=>{
//         sum = sum + num;
//     })
//     return sum;
// }

// console.log(summation(1,2,3,4,5,6));

// --------------------------------------------------------------

// 3.Write a function that can take any number of arguments and return 
// their sum. Explain how the rest operator allows you to handle an 
// indefinite number of arguments and how you can iterate over them to 
// calculate the sum.(using reduce function).

// const summation = (...nums)=>{
        
//         return nums.reduce((sum,num)=> sum+num ,0);
//     }
    
//     console.log(summation(1,2,3,4,5,6));

// -----------------------------------------------------------------

// 4.Write a function that can take any number of arguments and return 
// their product. Explain how the rest operator allows you to handle an 
// indefinite number of arguments and how you can iterate over them to 
// calculate the product.(using reduce function).

    // const summation = (...nums)=>{
    //     return nums.reduce((product,num)=>product*num,1);
    // }
    
    // console.log(summation(1,2,3,4,5,6));


    // ----------------------------------------------------------------

    // 5.find max using reduce function

    // const maximum = (...nums)=>{
        
    //     return nums.reduce((max,num)=>(
    //         // if(num>max)  max=num;
    //         max > num ? max : num),0)
    
    // }

    // console.log(maximum(5,9,2,6,4,7));

    // ---------------------------------------------------------------
    
    // 6.calculate sum of even numbers

    const Sumeven = (...nums)=>{
        return nums.reduce((sume,num)=>{
            if(num%2==0)
            {
                return sume+num;
            }
            else{
                return sume;
            }

        },0)
    }

    console.log(Sumeven(1,2,3,4,5,6));