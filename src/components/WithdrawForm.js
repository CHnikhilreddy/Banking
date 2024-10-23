import React, { useState } from 'react';
import './WithdrawForm.css';

function WithdrawForm() {
  const [balance, setBalance] = useState(1000); // Initial balance of $1000
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState(''); // To store error messages

  // Handle input change and reset error
  const handleAmountChange = (e) => {
    setWithdrawAmount(e.target.value);
    setError('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = parseFloat(withdrawAmount);

    // Validation
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid positive number.');
    } else if (amount > balance) {
      setError('Insufficient balance.');
    } else {
      // Withdraw and update the balance
      setBalance(balance - amount);
      alert(`Withdrawal of $${amount} successful!`);
      setWithdrawAmount(''); // Reset input field
    }
  };

  return (
    <div className="withdraw-form-container">
      <h2>Bank Withdraw</h2>

      {/* Display current balance */}
      <div className="balance-info">
        <p>Current Balance: <strong>${balance.toFixed(2)}</strong></p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Input field for withdrawal amount */}
        <div className="input-field">
          <label htmlFor="withdrawAmount">Withdrawal Amount:</label>
          <input
            type="number"
            id="withdrawAmount"
            value={withdrawAmount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0"
            step="0.01" // Allows decimals
          />
        </div>

        {/* Display error if validation fails */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit button */}
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default WithdrawForm;
