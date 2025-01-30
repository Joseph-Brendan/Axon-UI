import styles from "./InputField.module.css";
import PropTypes from "prop-types";
import FieldLabel from "./FieldLabel";
import Input from "./Input";

export default function InputField({ inputFieldClassName }) {
  const inputFieldStyle = styles.inputField;
  return (
    <div className={inputFieldClassName || `${inputFieldStyle}`}>
      <FieldLabel labelText="label" />
      <Input />
      <FieldLabel labelText="hint text" />
    </div>
  );
}

InputField.propTypes = {
  inputFieldClassName: PropTypes.string,
};
