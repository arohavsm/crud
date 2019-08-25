# crud

Simple CRUD( Create, Read, Update & Delete app ) REST API using Node

## Runngin Application

-> Install NodeJS <br/>  
-> Install MongoDB

1. Clone the application code from https://github.com/arohavsm/crud.git <br/>  
2. Run "yarn" inside "crud" directory <br/>  
3. Run "yarn start" once the second step is completed <br/>  

## Accessing API's

1. http://localhost:8090/auth/signup - Use this url to register an user <br/>  
  send following kind of data to create user <br/>  
  ```javascript
  { 
    "firstname": "Manasa", 
    "lastname: "R",
    "email": "manasa@gmail.com", // doesn't matter. Could be any eamil or normal username <br/>  
    "password: "{your password}"
   }
   ```
   Upon registration successful, show the user that the registration is successful <br/>  
   
2. http://localhost:8090/auth/signin - Use this url to login to the application <br/>  
  send following kind of data to login to the application
  ```javascript
  { 
    email: "manasa@gmail.com",
    password: "{your password}"
  }
  ** Once user login is successful, display successful message and set local storage using the token in the
     response. After displaying success message & setting token redirect user to comments page after 200ms **
  ```
  
## Layout design

1. Create signin page using bootstrap 4. The signin page should contain a form with the following fields <br/>  
  - email input field - required
  - password input field - required  
  - Submit button 
  
  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signin'.
  Refer ** Sign in(2nd point in Accessing API's section on top) what to do after successful signin **
  
2. Create signup page using bootstrap 4. The signup page should contain a form with the following fields <br/>  
  - firstname input field - required 
  - lastname input field - required
  - email input field - required
  - password input field - required
  - Submit button


  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signup'. 
  If the registration is succesful or failure show him respective success/error message.


## COMMENTS - CURD
### What is it?
Here we are enabling Login user to get/add/update/remove comments.

There will be two input boxes in the comments page which are

 - input field with label title
 - text area with label body
 
