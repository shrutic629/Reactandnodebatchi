const user = 
    {
      "id": "1",
      "username": "Prajjal Dhar",
      "useremail": "prajjal.dhar@gmail.com",
      "password": "Regex1234",
      "firstName": "Prajjal",
      "lastName": "Dhar",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 300000,
      "skills": ["Java", "Python"]
    };
    

  //2.create an object of user as created in mongodb and you have to pass 
  // that object in function and print all its values by without destructing it.


  function printvalue(user)
  {
      console.log(user.id);
      console.log(user.username);
      console.log(user.useremail);
      console.log(user.password);
      console.log(user.firstName);
      console.log(user.lastName);
      console.log(user.role);
      console.log(user.gender);
      console.log(user.age);
      console.log(user.city);
      console.log(user.salary);
      console.log(user.skills);
  }

  printvalue(user);