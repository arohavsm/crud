# crud

Simple CRUD( Create, Read, Update & Delete app ) REST API using Node

## Runngin Application

1. Clone the application code
2. Run "yarn" inside "crud" directory
3. Run "yarn start" once the second step is completed

## Accessing API's

1. http://localhost:8090/auth/signup - Use this url to register as user
  values that has to be posted to this route/end point/url/path <br/>  return
  
  {
    "firstname": "Manasa",
    "lastname: "R",
    "email": "manasa@gmail.com", // doesn't matter. Could be any eamil or normal username
    "password: "{your password}"
   }
   Upon registration successful, show the user that the registration is successful
   
2. http://localhost:8090/auth/signin - Use this url to login to the application
values that has to be posted to this route/end point/url/path are
  {
    email: "manasa@gmail.com",
    password: "{your password}"
  }
  Upone login successful, redirect user to some other page
  
## Layout design

1. Create signin page using bootstrap 4. The signin page should contain a form with the following fields
  a. email input field - required
  b. password input field - required
  c. Submit button
  
  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signin'. If the authentication is successful redirect user to some different page
  
2. Create signup page using bootstrap 4. The signup page should contain a form with the following fields
  a. firstname input field - required
  b. lastname input field - required
  c. email input field - required
  d. password input field - required


  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signup'. If the registration is succesful or failure show him respective success/error message

 
