const express = require('express');
const { addBudget, getBudgets, updateBudget, deleteBudget } = require('../controllers/budgetcontroller');

const router = express.Router();
router.post('/add', addBudget);
router.get('/', getBudgets);
router.put('/update/:id', updateBudget);
router.delete('/delete/:id', deleteBudget);

module.exports = router;
