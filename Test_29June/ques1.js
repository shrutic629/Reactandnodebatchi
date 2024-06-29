// 1. calculate the factorial of 5 using reduce method

const factorial = (...nums)=>{
return nums.reduce((fact,num)=>fact*num,1)

}

console.log(factorial(1,2,3,4,5));

// 2. find the maximum of n numbers passed from function using reduce3. 

const maximum = (...nums)=>{
    return nums.reduce((max,num)=>
        (num>max ? num:max),0)
}

console.log(maximum(23,45,78,34,12));

// 3.pass more than one string argument from function and check whether 
// the name prajjal is appear how many times

const checkName = (...names)=>{
    return names.reduce((count,name)=>{
        if(name=="prajjal")
        {
             return count=count+1;
        }
        else{
            return count;
        }
    },0)
    

}

console.log(checkName("shruti","nikita","prajjal","raj","prajjal"));


