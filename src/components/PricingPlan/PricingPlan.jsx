import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from './PricingItem/PricingItem';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li key={item.label} className={styles.item}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf().isRequired,
};

export default PricingPlan;
