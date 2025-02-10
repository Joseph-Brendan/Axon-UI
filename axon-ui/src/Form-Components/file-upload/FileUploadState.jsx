import React from 'react';
import PropTypes from 'prop-types';
import styles from './FileUpload.module.css';
import { CloudIcon } from './icons/CloudIcon';
import { ProgressBar } from './ProgressBar';
import { FileItem } from './FileItem';

const FileUploadState = ({ state, files, maxSize, onBrowse, onCancel }) => {
  const renderContent = () => {
    switch (state) {
      case 'default':
        return (
          <>
            <CloudIcon />
            <p className={styles.dragText}>Drag your file(s) or Browse</p>
            <p className={styles.maxSize}>Max {maxSize} MB files are allowed</p>
            <button onClick={onBrowse} className={styles.browseButton}>
              Browse File
            </button>
          </>
        );

      case 'uploading':
        return (
          <div className={styles.uploadingState}>
            {files.map((file, index) => (
              <FileItem
                key={index}
                file={file}
                progress={60}
                onCancel={onCancel}
                state="uploading"
              />
            ))}
          </div>
        );

      case 'completed':
        return (
          <div className={styles.completedState}>
            {files.map((file, index) => (
              <FileItem
                key={index}
                file={file}
                state="completed"
              />
            ))}
          </div>
        );

      case 'canceled':
        return (
          <>
            <CloudIcon />
            <p className={styles.dragText}>Upload Canceled</p>
            <button onClick={onBrowse} className={styles.browseButton}>
              Browse File
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.stateContainer}>
      {renderContent()}
    </div>
  );
};

FileUploadState.propTypes = {
  state: PropTypes.oneOf(['default', 'uploading', 'completed', 'canceled']).isRequired,
  files: PropTypes.array.isRequired,
  maxSize: PropTypes.number.isRequired,
  onBrowse: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default FileUploadState; 