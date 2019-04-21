import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={user.avatar} alt="art" />
      </div>
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{user.tag}</p>
      <p className={styles.country}>{user.location}</p>
      <div className={styles.statistic}>
        <div className={styles.stat}>
          Followers
          <br />
          <span className={styles.text}>{user.stats.followers}</span>
        </div>
        <div className={styles.stat}>
          Views
          <br />
          <span className={styles.text}>{user.stats.views}</span>
        </div>
        <div className={styles.stat}>
          Likes
          <br />
          <span className={styles.text}>{user.stats.likes}</span>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
export default Profile;
