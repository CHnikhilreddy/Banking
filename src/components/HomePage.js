import React from 'react';
import './HomePage.css'; // Assuming you'll write CSS for this in HomePage.css
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to MyBank</h1>

      <section className="banking-section">
        <h2>General Banking Services</h2>
        <div className="service-container">
          <div className="service-card">
            <h3>Deposit</h3>
            <p>Securely deposit money into your account.</p>
            <Link to='/DepositForm'><button>Deposit Now</button></Link>
          </div>

          <div className="service-card">
            <h3>Withdraw</h3>
            <p>Withdraw funds from your account easily.</p>
            <Link to='WithdrawForm'><button>Withdraw Now</button></Link>
          </div>

          <div className="service-card">
            <h3>Fund Transfer</h3>
            <p>Transfer funds between your accounts or to others.</p>
            <Link to='FundTransferForm'><button>Transfer Funds</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
