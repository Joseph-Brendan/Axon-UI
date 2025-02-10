import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

export const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}; 