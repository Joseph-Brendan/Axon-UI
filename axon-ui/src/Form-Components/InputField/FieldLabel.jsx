import styles from "./InputField.module.css";
import PropTypes from "prop-types";

export default function FieldLabel({ id, labelClassName, labelText }) {
  const labelStyle = styles.label;
  return (
    <div>
      <label htmlFor={id} className={labelClassName || `${labelStyle}`}>
        {labelText}
      </label>
    </div>
  );
}

FieldLabel.propTypes = {
  labelText: PropTypes.string,
  id: PropTypes.string,
  labelClassName: PropTypes.string,
};
