import React from "react";
import PropTypes from "prop-types";
import styles from "./RadioButton.module.css";
const RadioButton = ({ name, value, checked, onChange, label, disabled = false }) => {
    
  return (
    <label className={`${styles.radioLabel} ${disabled ? styles.radioDisabled : ""}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className={styles.radioInput}
      />
      <div className={`${styles.radioWrapper} 
        ${checked ? styles.radioChecked : ""} 
        ${disabled ? styles.radioDisabled : ""}`}
        tabIndex="0">
        {checked && <div className={styles.radioDiv}></div>}
      </div>
      {label && <span className={styles.radioCustom}>{label}</span>}
    </label>

  );
};

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};
 
export default RadioButton;

