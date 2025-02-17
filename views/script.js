document.getElementById("budget-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    // POST request to add budget
    const response = await fetch('/api/budget/add', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, amount })
    });

    if (response.ok) {
        alert("Budget added successfully!");
        loadBudgets(); // Refresh list after adding
    } else {
        alert("Error adding budget");
    }
});

// Function to load all budgets
async function loadBudgets() {
    const response = await fetch('/api/budget');
    const budgets = await response.json();

    const budgetList = document.getElementById("budget-list");
    budgetList.innerHTML = ""; // Clear old list

    budgets.forEach((budget) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `
            ${budget.name} - $${budget.amount}
            <div>
                <button class="btn btn-warning btn-sm" onclick="editBudget('${budget._id}', '${budget.name}', '${budget.amount}')">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBudget('${budget._id}')">Delete</button>
            </div>
        `;
        budgetList.appendChild(listItem);
    });
}

// Function to update budget
async function editBudget(id, currentName, currentAmount) {
    const newName = prompt("Edit Budget Name:", currentName);
    const newAmount = prompt("Edit Budget Amount:", currentAmount);

    if (newName !== null && newAmount !== null) {
        await fetch(`/api/budget/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newName, amount: newAmount })
        });
        loadBudgets();
    }
}

// Function to delete budget
async function deleteBudget(id) {
    if (confirm("Are you sure you want to delete this budget?")) {
        await fetch(`/api/budget/delete/${id}`, {
            method: "DELETE"
        });
        loadBudgets();
    }
}

// Load budgets on page load
document.addEventListener("DOMContentLoaded", loadBudgets);
