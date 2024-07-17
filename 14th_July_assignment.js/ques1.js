// 1. Data fetch hone ke baad, pehle user ka name extract karo using object 
// destructuring.

// function extractname(data){
//     const {name} = data[0];
//     console.log(name);
    
// }

// const getdata = async()=>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         extractname(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// getdata();

// ---------------------------------------------------------------------------

// 2. Data fetch hone ke baad, user jiska id 3 hai, uska address extract karo 
// using object destructuring.

// function extractdata(data)
// {
//     data.forEach(element => {
//         if(element.id==3)
//         {
//             const {address} = element;
//             console.log(address);
//         }
//     });
// }

// const getdata = async()=>{
//         try{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             extractdata(data);
            
//         }
//         catch(error)
//         {
//             console.log(error);
//         }
//     }
    
//     getdata();


// ---------------------------------------------------------------------------------

// 3. Data fetch hone ke baad, pehle user ka email extract karo using object 
// destructuring.

// function extractemail(data)
// {
//     const {email}= data[0];
//     console.log(email);
// }

// const getdata = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     extractemail(data);
// }

// getdata();

// ----------------------------------------------------------------------

// 4.Data fetch hone ke baad, aakhri user ka website extract karo using object 
// destructuring.

// function extractwebsite(data,length)
// {
//     data.forEach(element => {
//         if(element.id==length)
//         {
//            const {website} = element;
//            console.log(website);
//         }
//     });
// }

// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         const length = data.length;
//         extractwebsite(data,length);
//     }
    
//     getdata();

// ------------------------------------------------------------------------

// 5.Data fetch hone ke baad, har teesra (multiple of 3) user ka name ka 
// array banao.


// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             const multipleofthree = data.filter((singledata)=>{
//                 if(singledata.id%3==0)
//                 {
//                     return singledata;
//                 }
//             })
//             multipleofthree.forEach(element => {
//                 const {name} = element;
//                 console.log(name);
//             });
//         }
        
//         getdata();


// -------------------------------------------------------------------------

// 6.Data fetch hone ke baad, har teesra (multiple of 3) user ka company name 
// ka array banao.

// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             const multipleofthree = data.filter((singledata,index)=>{
//                 if((index+1)%3==0)
//                 {
//                     return singledata;
//                 }
//             })
//             const companyname = multipleofthree.map(element => {
//                 const {company}= element;
//                 const {name} = company;
//                 return name;
//             });

//             console.log(companyname);
            
//         }
        
//         getdata();

// ----------------------------------------------------------------------

// 7.Data fetch hone ke baad, har teesra (multiple of 3) user ka username ka 
// array banao.

// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             const filterdata = data.filter((singledata,index)=>{
//                 if((index+1)%3==0)
//                 {
//                     return singledata;
//                 }
//             })
//             const usernamedata = filterdata.map((item)=>{
//                 const {username} = item;
//                 return username;
//             })
//             console.log(usernamedata);
            
//         }
        
//         getdata();

// ----------------------------------------------------------------

// 8.Data fetch hone ke baad, paanchve user ka phone aur email extract karo 
// using object destructuring.

// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         data.filter((singledata,index)=>{
//             if((index+1)==5)
//             {
//                const {phone,email}= singledata;
//                console.log(phone);
//                console.log(email);
//             }
//         })
//     }
    
//     getdata();

// -------------------------------------------------------------------------

// 9.Data fetch hone ke baad, doosre user ka address.city aur address.zipcode 
// extract karo using object destructuring.

// const getdata = async()=>{
//             try{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                 data.filter((element,index)=>{
//                     if((index+1)==2)
//                     {
//                        const {address} = element;
//                        const{city,zipcode} = address;
//                        console.log(city);
//                        console.log(zipcode);
//                     }
//                 })
                
//             }
//             catch(error)
//             {
//                 console.log(error);
//             }
//         }
        
//         getdata();


// ---------------------------------------------------------------------

// 10.Data fetch hone ke baad, saathve user ka company.name aur 
// company.catchPhrase extract karo using object destructuring.

// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         const datas = data.filter((singledata,index)=>{
//             if((index+1)==7)
//             {
//                 const {company} = singledata;
//                 const {name,catchPhrase} = company;
//                 console.log(name);
//                 console.log(catchPhrase);
//             }
//         })
//     }
    
//     getdata();

// -----------------------------------------------------------------

// 11.Data fetch hone ke baad, chauthe user ka address.geo extract karo using 
// object destructuring.

// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             data.filter((singledata,index)=>{
//                 if((index+1)==4)
//                 {
//                    const {address} = singledata;
//                    const {geo} = address;
//                    console.log(geo);
//                 }
//             })
//         }
        
//         getdata();

// -------------------------------------------------------------------

// 12.Data fetch hone ke baad, har teesra (multiple of 3) user ke address.street 
// ka array banao.


// const getdata = async()=>{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                 const datas = data.filter((singledata,index)=>{
//                     if((index+1)%3==0)
//                     {
//                         return singledata;
//                     }
//                 })
//                 const streetdata = datas.map((ele)=>{
//                     const {address} = ele;
//                     const {street} = address;
//                     return street;
//                 })
//                 console.log(streetdata);
//             }
            
//             getdata();

// ------------------------------------------------------------------------

// 13.Data fetch hone ke baad, users ka ek naya array banao jo city 
// "South Christy" mein rehte hain using filter method.

// const getdata = async()=>{
//              const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             const citydata = data.filter((singledata)=>{
//                 if(singledata.address.city=="South Christy")
//                 {
//                     return singledata;
//                 }
//             })
//             console.log(citydata);
                    
//         }
                
//          getdata();

// -------------------------------------------------------------------------

// 14.Data fetch hone ke baad, users ka ek naya array banao jinka company name "Romaguera-Crona" 
// hai using filter method.

// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//             const datas = data.filter((singledata)=>{
//                 if(singledata.company.name=="Romaguera-Crona")
//                 {
//                     return singledata;
//                 }
//             })
//             console.log(datas);
                        
//             }
                    
//              getdata();

// ----------------------------------------------------------------------------

// 15.Data fetch hone ke baad, users ka array se 3 users ko remove karo starting from index 2 
// using splice method.

// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//                 const deletedata = data.splice(2,3);
//                 console.log(deletedata);
//                 console.log(data);
                            
//         }
                        
//         getdata();

// ---------------------------------------------------------------------------------

// 16.Data fetch hone ke baad, users ka ek naya array banao jo pehle 5 users ko contain karta ho 
// using slice method.

// const getdata = async()=>{
//             const response = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await response.json();
//                 const sliceddata = data.slice(0,5);
//                 console.log(sliceddata);
                                
//             }
                            
//             getdata();

// ------------------------------------------------------------------------------------

// 17.Data fetch hone ke baad, users ka name ka ek naya array banao using reduce method.


// const getdata = async()=>{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                     const datas = data.reduce((acc,singledata)=>{
//                         return [...acc,singledata.name];
//                     },[])
//                     console.log(datas);
                                    
//                 }
                                
//                 getdata();

// -------------------------------------------------------------------------------------

// 18.Data fetch hone ke baad, users ka ek naya array banao jo users ke email contain karta ho 
// jin ka address.zipcode "92998-3874" hai using filter and map methods.

// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//               const datas = data.map((singledata)=>{
//                     const {email} = singledata;
//                     return email;
//               })  
//               console.log(datas);
              
//               const items = data.filter((item)=>{
//                     if(item.address.zipcode=="92998-3874")
//                     {
//                         return item;
//                     }
//               })
//               console.log(items);
                                        
//          }
                                    
//         getdata();

// ------------------------------------------------------------------------------------

// 19.Data fetch hone ke baad, users ka company.name ka ek naya array banao jinka address.city 
// "Lebsackbury" hai using filter and reduce methods.

// const getdata = async()=>{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                     const datas = data.filter((singledata)=>{
//                         if(singledata.address.city=="Lebsackbury")
//                         {
//                             return singledata;
//                         }
//                     })
//                     const compnamedata = datas.reduce((acc,item)=>{
//                         return [...acc,item.company.name];
//                     },[])

//                     console.log(compnamedata);
//                 }
                                
//                 getdata();

// -----------------------------------------------------------------------------------------

// 20.Data fetch hone ke baad, users ka username ka ek naya array banao jo pehle 3 users ko contain 
// karta ho jinka city "South Christy" hai using filter and slice methods.


// const getdata = async()=>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//          const data = await response.json();
//                 const datas = data.filter((singledata)=>{
//                     if(singledata.address.city=="South Christy")
//                     {
//                         return singledata;
//                     }
//                 }) 
//                 const sliceddata = datas.slice(0,3);

//                 const usernamedata = sliceddata.map((item)=>{
//                     return item.username;
//                 })
//                 console.log(usernamedata);
//      }
                                    
//     getdata();

// --------------------------------------------------------------------------------

