# crud

Simple CRUD( Create, Read, Update & Delete app ) REST API using Node

## Running Application

-> Install NodeJS <br/>  
-> Install MongoDB

1. Clone the application code from https://github.com/arohavsm/crud.git <br/>  
2. Run "yarn" inside "crud" directory <br/>  
3. Run "yarn start" once the second step is completed <br/>  

## Accessing Authentication API's

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
  Refer ** Sign in(2nd point in Accessing Authentication API's section on top) what to do after successful signin **
  
2. Create signup page using bootstrap 4. The signup page should contain a form with the following fields <br/>  
  - firstname input field - required 
  - lastname input field - required
  - email input field - required
  - password input field - required
  - Submit button


  Using jquery ajax call submit the data in the input fields to the 'http://localhost:8090/auth/signup'. 
  If the registration is succesful or failure show him respective success/error message.


## COMMENTS - CRUD
### What is it?
Here we are enabling Login user to get/add/update/remove comments.

There will be two input boxes in the comments page which are

 - input field with label title
 - text area with label body

## Layout design for Comments Page
  Create a page where it contains following two sections

  - Form Section
    The form section should contain two fields and a submit button. The two fields are title input field and body text area

  - Table Section
    Display the comments in the table. The table contains title and body as table headers

 ## ACCESSING COMMENTS PAGE API's

  ** NOTE **

 - Make sure you set local storage token once the user is loggedin
 - While making ajax request to back end add authorization header in the request.
   The authorization header contains value stored in the local storage.

 1. Adding a comment. In order to add a comment send following data

    ```javascript
    {
      title: '{text in the input box}',
      body: '{ text in the text area box }'
    }
    Make sure you send authorization header as well along with these.
    API_END_POINt: http://localhost:8090/api/comments
    ```
 2. Get comments from the following url and display them in a table under the form

    ```
      Make request with authorization header. No need to sending any data.
      API_END_POINT: http://localhost:8090/api/comments
    ```
