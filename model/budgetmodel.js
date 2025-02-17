const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/budget")
.then(()=>{
    console.log("mongodb Connected");
})
.catch(()=>{
    console.log("failed to Connect");
})

const BudgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('budgetmodel', BudgetSchema);
