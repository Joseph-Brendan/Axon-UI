import React from "react";
import PropTypes from "prop-types";
import "./CheckBox.css";

export default function CheckBox({
  id,
  label,
  checked,
  onChange,
  disabled,
  checkBoxClassName,
}) {
   
  return (
<div className={`CheckBox || ${checkBoxClassName}` }>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool, 
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
};