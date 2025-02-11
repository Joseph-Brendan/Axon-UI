// import NavBarComp1 from "./Navigation-Components/NavBar/NavBar1-Components/NavBar1.jsx";

import InputField from "./Form-Components/InputField/InputField";
import RadioGroup from "./Form-Components/RadioInput/RadioGroup";
import ToggleGroup from "./Form-Components/ToggleInput/ToggleGroup";

function App() {
  return (
    <div>
      {/* <NavBarComp1 
          placeholderTxt="Home"
        /> */}
      <InputField />
      <RadioGroup/>
      <ToggleGroup/>
    </div>
  );
}

export default App;
