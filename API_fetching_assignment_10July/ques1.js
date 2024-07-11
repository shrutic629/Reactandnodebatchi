// 1. user,post,image koi ek se data fetch karna hai 

const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data);
}

getdata();