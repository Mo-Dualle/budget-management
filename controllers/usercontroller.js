const express= require("express");
const path= require("path");
const bcrypt= require("bcrypt");
const collection= require("../model/usermodel");




const app= express();
//convert data into json
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.render("login")
});
// Login Check
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });

        if (!check) {
            return res.send("Username not found");
        }
        const existss = await bcrypt.compare(req.body.password, check.password);

        if (existss) {
            res.render("BudgetCRUD");
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Server error, please try again");
    }
});






// SingUp Check 
app.get("/signup", (req, res)=>{
    res.render("signup")
});


//Register User
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const ExistsUser = await collection.findOne({ name: username });
        if (ExistsUser) {
            return res.send("This user already exists, please use a different username");
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object with hashed password
        const data = {
            name: username,
            password: hashedPassword
        };

        
        const userdata = await collection.insertMany([data]);
        console.log(userdata);

        res.send("user created");
    } catch (error) {
        console.error("Error:", error);
        res.send("An error occurred");
    }
});




// const port = 5400;
// app.listen(port,()=>{``
//     console.log(`server running on port ${port}`);
// })