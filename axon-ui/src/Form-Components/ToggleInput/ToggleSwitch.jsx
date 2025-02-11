import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ id, Name, Small, disabled, defaultChecked, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${styles.toggleSwitch} ${Small ? styles.smallSwitch : ""}`}>
      <input
        type="checkbox"
        name={Name}
        id={id}
        className={styles.toggleSwitchCheckbox}
        checked={isChecked}
        onChange={handleToggle}
        disabled={disabled}
      />
      {id && (
        <label className={styles.toggleSwitchLabel} htmlFor={id}>
          <span className={`${styles.toggleSwitchInner} ${disabled ? styles.toggleSwitchDisabled : ""}`}>
            <span className={styles.toggleSwitchText}></span>
          </span>
          <span className={`${styles.toggleSwitchSwitch} ${disabled ? styles.toggleSwitchDisabled : ""}`} />
        </label>
      )}
    </div>
  );
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  Name: PropTypes.string,
  Small: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ToggleSwitch;
