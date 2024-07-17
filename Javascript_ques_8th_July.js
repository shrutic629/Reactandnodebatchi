const userdata = [
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
    },
    {
      "id": "2",
      "username": "Shakshi Karamchandani",
      "useremail": "shakshi.karamchandani@yahoo.com",
      "password": "shakshi123",
      "firstName": "shakshi",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 32,
      "city": "New Delhi",
      "salary": 500000,
      "skills": ["Python", "C++", "Java", "Os"]
    },
    {
      "id": "3",
      "username": "Kasish Karamchandani",
      "useremail": "Kasish.karamchandani@regexsoftware.com",
      "password": "Kasish123",
      "firstName": "Kasish",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Mumbai",
      "salary": 800000,
      "skills": ["DBMS", "C++", "Kotlin", "Os"]
    },
    {
      "id": "3",
      "username": "Kasish Karamchandani",
      "useremail": "Kasish.karamchandani@regexsoftware.com",
      "password": "Kasish123",
      "firstName": "Kasish",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Assam",
      "salary": 500000,
      "skills": ["DBMS", "C++", "Kotlin", "Os"]
    },
    {
      "id": "4",
      "username": "Sumanth Rao",
      "useremail": "sumanth.rao@gmail.com",
      "password": "Sumanth123",
      "firstName": "Sumanth",
      "lastName": "Rao",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Mumbai",
      "salary": 700000,
      "skills": ["Java", "JavaScript"]
    },
    {
      "id": "5",
      "username": "Ananya Singh",
      "useremail": "ananya.singh@yahoo.com",
      "password": "Ananya123",
      "firstName": "Ananya",
      "lastName": "Singh",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Goa",
      "salary": 600000,
      "skills": ["Python", "C++", "HTML", "CSS"]
    },
    {
      "id": "6",
      "username": "Vikram Patel",
      "useremail": "vikram.patel@regexsoftware.com",
      "password": "Vikram123",
      "firstName": "Vikram",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Assam",
      "salary": 900000,
      "skills": ["Java", "C++", "SQL", "React"]
    },
    {
      "id": "7",
      "username": "Riya Sharma",
      "useremail": "riya.sharma@gmail.com",
      "password": "Riya123",
      "firstName": "Riya",
      "lastName": "Sharma",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Jaipur",
      "salary": 450000,
      "skills": ["Python", "JavaScript", "Node.js"]
    },
    {
      "id": "8",
      "username": "Abhishek Verma",
      "useremail": "abhishek.verma@yahoo.com",
      "password": "Abhishek123",
      "firstName": "Abhishek",
      "lastName": "Verma",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 1000000,
      "skills": ["Java", "C#", "ASP.NET", "SQL Server"]
    },
    {
      "id": "9",
      "username": "Rajesh Patel",
      "useremail": "rajesh.patel@gmail.com",
      "password": "Rajesh123",
      "firstName": "Rajesh",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 1200000,
      "skills": ["Python", "C++", "Django", "React"]
    },
    {
      "id": "10",
      "username": "Priya Gupta",
      "useremail": "priya.gupta@regexsoftware.com",
      "password": "Priya123",
      "firstName": "Priya",
      "lastName": "Gupta",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Goa",
      "salary": 1800000,
      "skills": ["Java", "Spring", "Hibernate"]
    },
    {
      "id": "11",
      "username": "Amit Singh",
      "useremail": "amit.singh@yahoo.com",
      "password": "Amit123",
      "firstName": "Amit",
      "lastName": "Singh",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 1500000,
      "skills": ["C++", "Python", "HTML", "CSS"]
    },
    {
      "id": "12",
      "username": "Neha Sharma",
      "useremail": "neha.sharma@regexsoftware.com",
      "password": "Neha123",
      "firstName": "Neha",
      "lastName": "Sharma",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "New Delhi",
      "salary": 900000,
      "skills": ["Java", "JavaScript", "React", "Node.js"]
    },
    {
      "id": "13",
      "username": "Rahul Verma",
      "useremail": "rahul.verma@yahoo.com",
      "password": "Rahul123",
      "firstName": "Rahul",
      "lastName": "Verma",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "New Delhi",
      "salary": 700000,
      "skills": ["Python", "Django", "SQL"]
    },
    {
      "id": "14",
      "username": "Sakshi Mishra",
      "useremail": "sakshi.mishra@yahoo.com",
      "password": "Sakshi123",
      "firstName": "Sakshi",
      "lastName": "Mishra",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Assam",
      "salary": 650000,
      "skills": ["Java", "C++", "Spring", "Hibernate"]
    },
    {
      "id": "15",
      "username": "Rahul Kumar",
      "useremail": "rahul.kumar@gmail.com",
      "password": "Rahul123",
      "firstName": "Rahul",
      "lastName": "Kumar",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 900000,
      "skills": ["Python", "Django", "Flask", "SQLAlchemy"]
    },
    {
      "id": "16",
      "username": "Vishal Singh",
      "useremail": "vishal.singh@regexsoftware.com",
      "password": "Vishal123",
      "firstName": "Vishal",
      "lastName": "Singh",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Jaipur",
      "salary": 750000,
      "skills": ["Java", "Spring", "Hibernate"]
    },
    {
      "id": "17",
      "username": "Anjali Gupta",
      "useremail": "anjali.gupta@yahoo.com",
      "password": "Anjali123",
      "firstName": "Anjali",
      "lastName": "Gupta",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Jaipur",
      "salary": 450000,
      "skills": ["C++", "Python", "HTML", "CSS"]
    },
    {
      "id": "18",
      "username": "Sachin Patel",
      "useremail": "sachin.patel@regexsoftware.com",
      "password": "Sachin123",
      "firstName": "Sachin",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Hyderabad",
      "salary": 1900000,
      "skills": ["Java", "JavaScript", "React", "Node.js"]
    },
    {
      "id": "19",
      "username": "Kritika Verma",
      "useremail": "kritika.verma@regexsoftware.com",
      "password": "Kritika123",
      "firstName": "Kritika",
      "lastName": "Verma",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Kolkata",
      "salary": 2500000,
      "skills": ["Python", "Django", "SQL"]
    },
    {
      "id": "20",
      "username": "Aryan Mishra",
      "useremail": "aryan.mishra@gmail.com",
      "password": "Aryan123",
      "firstName": "Aryan",
      "lastName": "Mishra",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Hyderabad",
      "salary": 450000,
      "skills": ["Java", "C++", "Spring", "Hibernate"]
    }
  ]
//   console.log(userdata);

  
// How many documents are there in the collection?
//   console.log(userdata.length);

// Retrieve all documents where the role is "admin".
//   const userrole = userdata.filter((user)=>user.role == "admin");
//   console.log(userrole);

// Find all documents where the role is "customer" and the username contains "Karamchandani".
  const role_username = userdata.filter((user)=>user.role == "customer" && user.username.includes("Karamchandani"))
  console.log(role_username);
// Retrieve the document with the username "Sumanth Rao".
// Find all documents where the user's first name starts with "R".
// Retrieve all documents where the user has the skill "Python".
// Find all documents where the user has the skill "Java" and "Python".
// Retrieve all documents where the user's first name is "Aryan" or the last name is "Gupta".
// Find all documents where the user has the skill "Java" but not "Python".
// Retrieve all documents where the user's last name is "Sharma" and the role is "customer".
// Find all documents where the user has exactly three skills.
// Retrieve all documents where the user's first name starts with "S" and the role is "admin".
// Find all documents where the user has the skill "Java" and the role is not "admin".
// Retrieve all documents where the user's role is not specified.
// Find all documents where the user has at least four skills.
// Retrieve all documents where the user's role is "customer" and the user has no specified skills.
// Find all documents where the user's email contains "regexsoftware.com".
// Retrieve all documents where the user's email does not contain "gmail.com".
// Find all documents where the user's last name is not "Singh".
// Retrieve all documents where the user's role is "admin" and the user has the skill "Java".
// Find all documents where the user's first name is "Ananya" and the user's role is "customer".
// Retrieve all documents where the user's role is "admin" and the user has at least one skill.
// Find all documents where the user's role is "admin" and the user's first name starts with "R".
// Retrieve all documents where the user's role is "customer" and the user's last name is "Patel".
// Find all documents where the user's role is "admin" and the user has the skill "Python".
// Retrieve all documents where the user's role is "customer" and the user's last name is not "Gupta".
// Find all documents where the user's role is "admin" and the user's email ends with "@regexsoftware.com".
// Retrieve all documents where the user's role is "customer" and the user has the skill "React".
// Find all documents where the user's role is "customer" and the user has the skill "SQL".
// Retrieve all documents where the user's role is "admin" and the user has at least three skills.
// Find all documents where the user's role is "customer" and the user has the skills "Java" and "C++".
// Retrieve all documents where the user's role is "admin" and the user's email does not contain "gmail.com".
// Find all documents where the user's role is "customer" and the user's last name starts with "M".
// Retrieve all documents where the user's role is "admin" and the user's first name is not "Rahul".
// Find all documents where the user's role is "customer" and the user's email does not contain "gmail.com".
// Retrieve all documents where the user's role is "admin" and the user has the skill "Java" but not "JavaScript".
// Find all documents where the user's role is "customer" and the user's first name is not "Ananya".
// Retrieve all documents where the user's role is "admin" and the user's email contains "regexsoftware.com".
// Find all documents where the user's role is "customer" and the user has the skill "HTML" but not "CSS".
// Retrieve all documents where the user's role is "admin" and the user has the skill "Java" and "JavaScript".
// Find the average age of users.
// Find all female users from Jaipur who know Python.
// Find all male users in Delhi who are above age 26
// Find all users who are from either New Delhi or Mumbai.
// Find all users who have the same last name.
// Find the count of users in each city.
// How many users are from New Delhi?
// How many Female users are from Jaipur?
// How many Male users are there in Delhi who have skills Java?
// How many users are from Hyderabad having age greater than 24 and have skill Python,C++
// How many female users are from Goa having age greater than 24 and have skill Python,C++