const Budget = require('../model/budgetmodel');

// Add Budget
exports.addBudget = async (req, res) => {
    try {
        const { name, amount } = req.body;
        const newBudget = new Budget({ name, amount });
        await newBudget.save();
        res.status(201).json({ message: "Budget added successfully!", newBudget });
    } catch (error) {
        res.status(500).json({ message: "Error adding budget", error });
    }
};

// Get Budgets
exports.getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ message: "Error fetching budgets", error });
    }
};

// Update Budget
exports.updateBudget = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, amount } = req.body;
        const updatedBudget = await Budget.findByIdAndUpdate(id, { name, amount }, { new: true });
        res.json({ message: "Budget updated successfully!", updatedBudget });
    } catch (error) {
        res.status(500).json({ message: "Error updating budget", error });
    }
};

// Delete Budget
exports.deleteBudget = async (req, res) => {
    try {
        const { id } = req.params;
        await Budget.findByIdAndDelete(id);
        res.json({ message: "Budget deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting budget", error });
    }
};
