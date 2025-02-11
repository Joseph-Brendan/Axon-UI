import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const ToggleGroup = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (e) => {
    setToggleState(e.target.checked);
    console.log("Toggle Switch State:", e.target.checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <ToggleSwitch 
        id="custom-toggle" 
        Name="exampleSwitch"
        Small={false} 
        disabled={false} 
        defaultChecked={toggleState} 
        onChange={handleToggle} 
      />
      
    
    </div>
  );
};

export default ToggleGroup;

