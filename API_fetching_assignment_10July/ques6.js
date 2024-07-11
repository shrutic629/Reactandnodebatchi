// 6.data mai se se sirf 2-3 field of information ko leke ek array mai 
// add karna hai.

const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    
    
    const information = data.reduce((newarray,element)=>{
        return [...newarray,element.name,element.username,element.email]
    },[])

    console.log(information);
}

getdata();