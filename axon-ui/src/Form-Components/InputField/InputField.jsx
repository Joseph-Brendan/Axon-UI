import PropTypes from "prop-types";
import styles from "./InputField.module.css";

export default function InputField({
  label,
  id,
  iconRight,
  iconLeft,
  border = "1px solid #8f959e",
  placeholder = "input text",
  type = "text",
  background,
  className,
}) {
  return (
    <div>
      <div className={className}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          style={{ ...background, border }}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  border: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  background: PropTypes.string,
};
