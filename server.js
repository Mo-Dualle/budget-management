const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const budgetRoutes = require('./routes/budgetroute');
const userRoutes = require('./routes/userRoutes');
const connectServer = require('./database/dbBudget');



const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views'))); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  

app.get('/' , (req , res) =>{
    res.sendFile(path.join(__dirname , '.' , 'views' , 'BudgetCRUD.ejs'));
})

app.get('/books' , (req , res) =>{
    res.sendFile(path.join(__dirname , '.' , 'views' , 'login.ejs'));
})

app.get('/reg' , (req , res) =>{
    res.sendFile(path.join(__dirname , '.' , 'views' , 'signup.ejs'));
})


// MongoDB
connectServer();

// API Routes
app.use('/api/budget', budgetRoutes);
app.use('/api/auth', userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));