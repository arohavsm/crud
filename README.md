# crud

Simple CRUD( Create, Read, Update & Delete app ) REST API using Node

## Runngin Application

1. Clone the application code <br/>  
2. Run "yarn" inside "crud" directory <br/>  
3. Run "yarn start" once the second step is completed <br/>  

## Accessing API's

1. http://localhost:8090/auth/signup - Use this url to register as user
  values that has to be posted to this route/end point/url/path <br/>  
  
  { "firstname": "Manasa", <br/>  
    "lastname: "R", <br/>  
    "email": "manasa@gmail.com", // doesn't matter. Could be any eamil or normal username <br/>  
    "password: "{your password}" <br/>  
   } <br/> 
   Upon registration successful, show the user that the registration is successful <br/>  
   
2. http://localhost:8090/auth/signin - Use this url to login to the application
values that has to be posted to this route/end point/url/path are <br/>  
  { email: "manasa@gmail.com", <br/>  
    password: "{your password}" <br/>  
  } <br/>  
  Upone login successful, redirect user to some other page
  
## Layout design

1. Create signin page using bootstrap 4. The signin page should contain a form with the following fields <br/>  
  a. email input field - required
  b. password input field - required
  c. Submit button
  
  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signin'. If the authentication is successful redirect user to some different page <br/>  
  
2. Create signup page using bootstrap 4. The signup page should contain a form with the following fields <br/>  
  a. firstname input field - required 
  b. lastname input field - required
  c. email input field - required 
  d. password input field - required
  e. Submit button


  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signup'. If the registration is succesful or failure show him respective success/error message

 
