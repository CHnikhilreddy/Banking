import React, { useState } from 'react';
import "./FundTransferForm.css"

function FundTransferForm() {
  const [balance, setBalance] = useState(1000); // Initial balance of $1000
  const [transferAccount, setTransferAccount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [error, setError] = useState(''); // To store error messages

  // Handle transfer account input
  const handleAccountChange = (e) => {
    setTransferAccount(e.target.value);
    setError('');
  };

  // Handle transfer amount input
  const handleAmountChange = (e) => {
    setTransferAmount(e.target.value);
    setError('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = parseFloat(transferAmount);

    // Validation
    if (!transferAccount) {
      setError('Please enter a valid account to transfer to.');
    } else if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid positive amount.');
    } else if (amount > balance) {
      setError('Insufficient balance.');
    } else {
      // Process transfer and update the balance
      setBalance(balance - amount);
      alert(`Transfer of $${amount} to account ${transferAccount} successful!`);
      setTransferAccount(''); // Reset transfer account input
      setTransferAmount(''); // Reset amount input
    }
  };

  return (
    <div className="fund-transfer-container">
      <h2>Fund Transfer</h2>

      {/* Display current balance */}
      <div className="balance-info">
        <p>Current Balance: <strong>${balance.toFixed(2)}</strong></p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Input field for transfer account */}
        <div className="input-field">
          <label htmlFor="transferAccount">Transfer Account:</label>
          <input
            type="text"
            id="transferAccount"
            value={transferAccount}
            onChange={handleAccountChange}
            placeholder="Enter account number or name"
          />
        </div>

        {/* Input field for transfer amount */}
        <div className="input-field">
          <label htmlFor="transferAmount">Amount:</label>
          <input
            type="number"
            id="transferAmount"
            value={transferAmount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0"
            step="0.01" // Allows decimals
          />
        </div>

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit button */}
        <button type="submit">Transfer Funds</button>
      </form>
    </div>
  );
}

export default FundTransferForm;
