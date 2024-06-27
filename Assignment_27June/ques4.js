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
    

//   4. you have to use the mongodb user dataset to pass object in function now 
// from that function you have to pass the skills key pass as object to another 
// function print all its skills using this method.

function print(skills)
{
    const [a,b] = skills;
    console.log(a);
    console.log(b);
  }

function printvalue(user)
{
   const {skills} = user;
  //  console.log(skills)
    print(skills);
}

printvalue(user);