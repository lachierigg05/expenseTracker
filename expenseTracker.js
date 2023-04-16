const expenseForm = document.getElementById('expense-form');
const expenseDescription = document.getElementById('expense-description');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');

let expenses = [];

// Add an expense
function addExpense(description, amount) {
  const expense = {
    description: description,
    amount: amount
  };

  expenses.push(expense);
}

// Calculate total expenses
function calculateTotalExpenses() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  return total;
}

// Format expense amount as currency
function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

// Render expenses to the page
function renderExpenses() {
  expenseList.innerHTML = '';
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const div = document.createElement('div');
    div.innerHTML = expense.description + ' ' + formatAmount(expense.amount);
    expenseList.appendChild(div);
  }
}

// Render total expenses to the page
function renderTotalExpenses() {
  const total = calculateTotalExpenses();
  totalExpenses.innerHTML = 'Total Expenses: ' + formatAmount(total);
}

// Handle form submit
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const description = expenseDescription.value.trim();
  const amount = parseFloat(expenseAmount.value.trim());

  if (description === '' || isNaN(amount)) {
    alert('Please enter a valid expense description and amount');
  } else {
    addExpense(description, amount);
    renderExpenses();
    renderTotalExpenses();
    expenseDescription.value = '';
    expenseAmount.value = '';
  }
});
