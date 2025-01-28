import PropTypes from "prop-types";
import styles from "./InputField.module.css";

export default function Input({
  id,
  placeholder = "input text",
  type = "text",
  inputClassName,
  inputContainerClassName,
}) {
  const inputStyle = styles.input;
  const inputWrapper = styles.inputWrapper;
  return (
    <div className={inputContainerClassName || `${inputWrapper}`}>
      <input
        className={inputClassName || `${inputStyle}`}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
