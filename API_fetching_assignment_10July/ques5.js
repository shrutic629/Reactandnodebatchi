// 5. data fetch hone ke badd har mutiple of 3 ka field of information ka 
// array create karna ke lana hai.

const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    const oddfields = data.reduce((data,element,index)=>{
        if((index+1)%3==0)
        {
            data.push(element);
        }
        return data;
        
    },[])
     
    console.log(oddfields)

}

getdata();