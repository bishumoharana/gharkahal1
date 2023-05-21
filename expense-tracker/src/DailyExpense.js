import React, { useState } from 'react';

function DailyExpense() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense() {
    const newExpense = { "Expense Type": '', "Expense Item": '', Amount: 0 }; // Customize the expense structure
    setExpenses([newExpense, ...expenses]);
  }

  function handleChangeExpense(index, field, value) {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      <h1>Daily Expense Tracking</h1>
      <table>
        <thead>
          <tr>
            <th>Expense Type</th>
            <th>Expense Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={expense["Expense Type"]}
                  onChange={(e) => handleChangeExpense(index, 'Expense Type', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={expense["Expense Item"]}
                  onChange={(e) => handleChangeExpense(index, 'Expense Item', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={expense.Amount}
                  onChange={(e) => handleChangeExpense(index, 'Amount', parseFloat(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default DailyExpense;
