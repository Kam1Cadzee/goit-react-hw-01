import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import getColor from '../../colors';

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            style={{ backgroundColor: getColor() }}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
Stats.defaultProps = {
  title: null,
};

export default Stats;
