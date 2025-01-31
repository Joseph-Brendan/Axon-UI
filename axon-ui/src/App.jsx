// import NavBarComp1 from "./Navigation-Components/NavBar/NavBar1-Components/NavBar1.jsx";

//import InputField from "./Form-Components/InputField/InputField";
import DropDown from "./Form-Components/Dropdown/DropDown";
import FieldLabel from "./Form-Components/InputField/FieldLabel"

function App() {

  const options = [
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder"
  ]

  const handleChange = ()=> {
    console.log("Selected:, options")
  }
  return (
    <div>
      {/* <NavBarComp1 
          placeholderTxt="Home"
        /> */}
      {/* <InputField /> */}
      
      <DropDown placeholder="Input text" label="label" options={options} onChange={handleChange}/>
    </div>
  );
}

export default App;
