import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  const colors = {
    bronze: '#dd7c4b',
    silver: '#c0c0c0',
    gold: '#dda431',
  };
  const color = colors[label.toLowerCase()];
  return (
    <div className={styles.pricingItem}>
      <i
        className={styles.icon}
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <h2 className={styles.label} style={{ color }}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button
        type="button"
        className={styles.button}
        style={{ backgroundColor: color }}
      >
        Get Started
      </button>
    </div>
  );
};
PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default PricingItem;
