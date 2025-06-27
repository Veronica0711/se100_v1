import React, { useState } from 'react';

function Finance() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 100;
    const time = parseFloat(years);
    if (isNaN(principal) || isNaN(interest) || isNaN(time)) {
      setResult('Please enter valid numbers.');
      return;
    }
    const total = principal * Math.pow(1 + interest, time);
    setResult(`Future Value: $${total.toFixed(2)}`);
  };

  return (
    <div>
      <h2>Finance Calculator</h2>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={e => setRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Years"
          value={years}
          onChange={e => setYears(e.target.value)}
        />
        <button onClick={calculate}>Calculate</button>
      </div>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Finance;