// 1.User se 5 input lena hai, inka maximum nikalna hai. Agar maximum > 90 hota hai 
//   to ek function call karna hai, jisme maximum aur ek user input ko subtract karna hai 
//   aur result return karna hai. Agar result positive hai to us value ka cube return karna 
//   hai.  agar result -ve hai to fir uska sqaure nikalna hai aur agar result 0 ata hai to 
//   fir apko console log karna hai : "aur nahi ho raha hai merese".

function subtraction(max)
{
    let x = 30;
    return (max-x)
}

let main = ()=>{
    let a = 100;
let b = 90;
let c = 150;
let d = 120;
let e = 110;
// let x = Math.max(a,b,c,d,e)
// console.log(x);
let max = a;
if(b>a) max = b;
if(c>b) max=c;
if(d>c) max=d;
if(e>d) max=e;
// console.log(max);
if(max>90)
{
    let result = subtraction(max);
    if(result>0)
    {
        return (result*result*result);
    }
    else if(result<0)
    {
        return (result*result);
    }
    else{
        console.log("aur nahi ho raha hai merese");
    }

}
}

console.log(main());




// 2.User se 3 input lena hai, inka average nikalna hai. Agar average > 40 hai to ek 
// function call karna hai, jisme 2 input lena hai aur unka product return karna hai. 
// Agar product negative hai to absolute value return karna ha  aur uske baad uska 
// reverse nikalna. agar product positive hai to fir check karna hai ki product 
// prime number hai ya nahi hai.

// let productres = ()=>{
//     let x = 40;
//     let y = 28;
//     return (x * y);
// }

// function reverse(ans)
// {
//     let rev=0;
//     let rem;
//     while(ans>0)
//     {
//         rem = ans%10;
//         rev = rev*10+rem;
//         ans = Math.floor(ans/10);
//     }

//     return rev;
// }

// let primenum = (ans)=>{
//     for(let i=2; i<ans; i++)
//     {
//         if(ans%i==0)
//         {
//             return false;
//         }
//     }
//     return true;
// }

// let main = ()=>{
//     let a = 90;
// let b = 92;
// let c = 98;
// let avg = (a+b+c)/3;
// if(avg>40)
// {
//     let ans = productres();
//     if(ans<0)
//     {
//         ans = Math.abs(ans);
//         console.log(reverse(ans));
//     }
//     else if(ans>0)
//     {
//         if(primenum(ans)) 
//         {
//             console.log("prime number");
//         }
//         else{
//             console.log("not a prime number");
//         }
//     }

// }
// }

// main();

