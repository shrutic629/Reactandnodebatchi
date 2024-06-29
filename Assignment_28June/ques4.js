// 4.using rest operator function concept pass n no of arguments and  
// get the sum of even numbers of it(reduce)

const sumNum = (...nums)=>{
    return nums.reduce((sum,num)=>{
        if(num%2==0)
        {
            return sum+num;
        }
        else{
            return sum;
        }
    },0)
}

console.log(sumNum(1,2,3,4,5,6,7,8));