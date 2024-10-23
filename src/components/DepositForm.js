import React, { useState } from 'react';
import './DepositForm.css'

function DepositForm() {
  const [amount, setAmount] = useState(''); // State to store the amount

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Perform any validation or actions here
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a valid amount');
    } else {
      alert(`Deposit successful! Amount: $${amount}`);
    }

    // Clear the input after submission
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update the state with the input value
          placeholder="Enter deposit amount"
          min="0"
          step="0.01" // Allows decimals
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DepositForm;
