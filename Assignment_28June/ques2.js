// 2.using rest operator function concept pass n no of arguments and get 
// the minimum of it (reduce)

const minimum = (...nums)=>{
    return nums.reduce((min,num)=>(
        min<num ? min:num
    ),1000)
}

console.log(minimum(23,56,89,34,12,45));