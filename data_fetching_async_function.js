// data fecthing using async function
const getdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users&quot");
      datas = await response.json();
      const addressdata = datas.reduce((newaddarr, data) => {
        return [...newaddarr, data.address];
      }, []);
      console.log(addressdata);
    } catch (error) {
      console.log(error);
    }
  };
  const main = async () => {
    console.log("abc");
    await getdata();
    console.log("def");
    console.log("def2");
    console.log("def3");
  };
  
  main();
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");