import React from 'react';
import styles from './TransactionHistory.module.css';
import TransactionRow from './TransactionRow/TransactionRow';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
