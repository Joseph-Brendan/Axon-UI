import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FileUpload.module.css';
import FileUploadState from './FileUploadState';
import { CloudIcon } from './icons/CloudIcon';

const FileUpload = ({ maxSize = 10, allowedFileTypes = ['jpg', 'jpeg', 'png'] }) => {
  const [files, setFiles] = useState([]);
  const [uploadState, setUploadState] = useState('default'); // default, uploading, completed, canceled, success

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    // Simulate file upload process
    setUploadState('uploading');
    setFiles(newFiles);

    // Simulate upload progress
    setTimeout(() => {
      setUploadState('completed');
    }, 2000);
  };

  const handleCancel = () => {
    setUploadState('canceled');
    setFiles([]);
  };

  const handleBrowse = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div 
      className={styles.fileUploadContainer}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileInput"
        multiple
        className={styles.hiddenInput}
        onChange={handleFileInput}
        accept={allowedFileTypes.map(type => `.${type}`).join(',')}
      />

      <FileUploadState
        state={uploadState}
        files={files}
        maxSize={maxSize}
        onBrowse={handleBrowse}
        onCancel={handleCancel}
      />
    </div>
  );
};

FileUpload.propTypes = {
  maxSize: PropTypes.number,
  allowedFileTypes: PropTypes.arrayOf(PropTypes.string)
};

export default FileUpload;
