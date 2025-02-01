import { useState } from "react";
import RadioButton from "./RadioButton";
import styles from "./RadioButton.module.css";

const RadioGroup = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className={styles.radioOption}>
      <RadioButton
        name="example"
        value="option1"
        checked={selected === "option1"}
        onChange={setSelected}
        label="Option 1"
      />
      <RadioButton
        name="example"
        value="option2"
        checked={selected === "option2"}
        onChange={setSelected}
        label="Option 2"
      />
      <RadioButton
        name="example"
        value="option3"
        checked={selected === "option3"}
        onChange={setSelected}
        label="Option 3"
      />
    </div>
  );
};

export default RadioGroup;
