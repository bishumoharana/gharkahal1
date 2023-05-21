import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ExpenseBaseline from './ExpenseBaseline';
import DailyExpense from './DailyExpense';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Expense Baseline</Link>
            </li>
            <li>
              <Link to="/daily-expense">Daily Expense Tracking</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ExpenseBaseline />} />
          <Route path="/daily-expense" element={<DailyExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

