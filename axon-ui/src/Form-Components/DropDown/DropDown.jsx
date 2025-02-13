import DropdownMenu from "./DropDownMenu"
import { User, CircleCheck} from "lucide-react"


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
            <DropdownMenu 
            label="label" 
            placeholder="Input text"  
            options={options} 
            onChange={handleChange}
            showIcons={true}
            customUserIcon={User}
            customCheckIcon={CircleCheck}
            />
        </div>
    )
}