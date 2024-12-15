# **Backend for Library Management System**

# _Description:_
---
The project shows the backend for a library management system. It includes the CRUD operations for admin and users.

The CRUD operations common for admin and user
--

    Sign-Up
    Sign-In
CRUD operations for user:
--
    Update address
    Add to cart
    Remove from cart
    Place order
    Get Order History
    Get all orders
    Add book to favourites
    Remove book from favourites
    Get favourite books
CRUD operations for Admin
---
    Get user information
    Add Book
    Delete Book
    Update Book
    Get all Books
    Get recent Books
    Get book by ID
    Get User Cart
    Update Status in Cart

- Programming language: **Javascript**
- Framework: **Node.js**
- Database: **MongoDB (Atlas)**
---


# _Instructions to setup and run_
----
- CLone the files and open it in vscode
- In Mongodb Atlas create a new cluster and paste the link of the cluster in the .env file in the variable URI, to connect to the database
- To run the application, in terminal provide the command 'nodemon app.js'
- 'Server Started at port 1000' and 
'Connected to Database' will be displayed
- To check the CRUD operations in postman provide the link as "localhost:1000/api/v1/.." the link of the operation you desire with appropriate method.
- The operations will also be updated in the database.
- For operation related to the 'cart','orders','favourites' it's necessary to provide the token and also for admin operations.
---
# Screenshots of Test cases using postman
---
![Image link](D:\MERN\Bookstore\backend\images) 


    
