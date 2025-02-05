import DropdownMenu from "./DropDownMenu"


export default function DropDown(){
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

    return(
        <div>
            <DropdownMenu placeholder="Input text" label="label" options={options} onChange={handleChange}/>
        </div>
    )
}