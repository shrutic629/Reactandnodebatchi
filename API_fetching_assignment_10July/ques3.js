// 3. data fetch hone ke badd har odd field of information ka new array 
// create karna hai.

const getdata = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    const oddfields = data.reduce((data,element,index)=>{
        if(index%2==0)
        {
            data.push(element);
        }
        return data;
        
    },[])
     
    console.log(oddfields)

}

getdata();


