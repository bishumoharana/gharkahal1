import React, { useEffect, useState } from 'react';

function ExpenseBaseline() {
  const [baseline, setBaseline] = useState(null);

  useEffect(() => {
    fetchBaseline();
  }, []);

  async function fetchBaseline() {
    try {
      const response = await fetch('/api/baseline');
      const data = await response.json();
      setBaseline(data[0]); // Assuming there's only one baseline document
    } catch (error) {
      console.log('Error fetching baseline data', error);
    }
  }

  if (!baseline) {
    return <div>Loading baseline data...</div>;
  }

  return (
    <div>
      <h1>Expense Baseline</h1>
      <p>Expense Group: {baseline.expensegrp}</p>
      <p>Description: {baseline.desc}</p>
      <p>Month Period: {new Date(baseline.monthprd.$date).toLocaleDateString()}</p>
      <p>Group Amount: {baseline.grpamt}</p>
    </div>
  );
}

export default ExpenseBaseline;
