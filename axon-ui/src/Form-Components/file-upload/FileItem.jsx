import React from 'react';
import PropTypes from 'prop-types';
import styles from './FileItem.module.css';
import { ProgressBar } from './ProgressBar';

export const FileItem = ({ file, progress, onCancel, state }) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className={styles.fileItem}>
      <div className={styles.fileInfo}>
        <span className={styles.fileName}>{file.name}</span>
        <span className={styles.fileSize}>{formatFileSize(file.size)}</span>
      </div>
      
      {state === 'uploading' && (
        <>
          <ProgressBar progress={progress} />
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancel
          </button>
        </>
      )}
      
      {state === 'completed' && (
        <div className={styles.completedIcon}>✓</div>
      )}
    </div>
  );
};

FileItem.propTypes = {
  file: PropTypes.object.isRequired,
  progress: PropTypes.number,
  onCancel: PropTypes.func,
  state: PropTypes.oneOf(['uploading', 'completed']).isRequired
}; 