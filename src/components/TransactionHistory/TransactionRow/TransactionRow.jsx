import React from 'react';
import styles from './TransactionRow.module.css';

const TransactionRow = ({ item }) => {
  return (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TransactionRow;
