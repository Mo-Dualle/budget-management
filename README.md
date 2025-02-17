Projector

Description

Projector is a Node.js-based application designed to manage budgets efficiently. 
The system enables users to add, update, delete, and track their budgets, providing a seamless and structured workflow.


Features:
User authentication (Sign In & Sign Up)
Budget management (Add, Update, Delete budgets)
MongoDB integration for data storage
REST API for managing users and budgets


Structured project architecture
Project Structure
nodejs-projector-main/
│── controllers/
│   ├── BudgetController.js
│   ├── UserController.js
│── database/
│   ├── dbBudget.js
│── model/
│   ├── BudgetModel.js
│   ├── UserModel.js
│── routes/
│   ├── budgetRoute.js
│   ├── userRoute.js
│── views/
│   ├── index.html
│── server.js
│── package.json


Technologies Used
Node.js - Backend runtime
Express.js - Web framework
MongoDB - Database
Mongoose - ORM for MongoDB
HTML & Bootstrap &ejs - Frontend UI


API Endpoints

Method

Endpoint

Description

POST

/api/signup

Register a new user

POST

/api/signin

Authenticate a user

GET

/api/budgets

Fetch all budgets

POST

/api/budgets

Add a new budget

PUT

/api/budgets/:id

Update a budget

DELETE

/api/budgets/:id

Delete a budget

Contributing

Feel free to contribute by submitting issues or pull requests.

Installation
Clone the repository:
git clone <repository-url>
Navigate to the project directory:
cd nodejs-projector-main
Install dependencies:
npm install

