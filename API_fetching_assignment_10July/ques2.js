// 2. data fetch hone ke badd sirf ek field of information ka new array 
// create karna hai.

const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    const namearray = data.reduce((array,element) => {
        return [...array,element.name]
    },[]);

    console.log(namearray);

}

getdata();
