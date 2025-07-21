import React from 'react';
import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="balance-card">
        <p className="label">Current Balance</p>
        <h1 className="amount">$5,750.20</h1>
        <p className="card-info">**** **** **** 1289</p>
        <p className="date">09/25</p>
      </div>

      <div className="grid-section">
        <div className="card transactions">
          <h3>Transactions</h3>
          <ul>
            <li>☕ Starbucks New York LLP <span>$5.30</span></li>
            <li>🛒 Walmart Marketplace <span>$135</span></li>
            <li>💸 From Catherine Pierce <span>$250</span></li>
          </ul>
        </div>

        <div className="card transfer">
          <h3>Transfer</h3>
          <input type="text" placeholder="9876 8774 5443 0000 1289" />
        </div>

        <div className="card conversion">
          <h3>Conversion</h3>
          <select>
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
          </select>
          <input type="number" value="5100" />
          <p className="rate">Rate = 5.01 (Jun 21, 13:59 UTC)</p>
        </div>
      </div>
    </div>
  );
}
