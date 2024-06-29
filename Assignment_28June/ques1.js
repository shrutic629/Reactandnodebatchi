// 1. using rest operator function concept pass n no of arguments and 
// get the maxium of it (forEach)

function maximum(...nums)
{
    let max=0;
    nums.forEach((num)=>{
        
        if(num>max)
        {
            max = num;
        }
    })
    return max;
}

console.log(maximum(34,78,45,20,17,38,45));