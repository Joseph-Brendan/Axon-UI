import LogoSvg from "../../NavBar-General-Components/logo.jsx";
import PlaceholderText from "../../NavBar-General-Components/Placeholder.jsx";

//  navigation nav bar 1 components but will need for some basic components to be ready
export default function NavBarComp1(){
    return(
        <div>
            <div>
                <LogoSvg 
                    logo="Axon-UI/axon-ui/Assets/Logo.svg"                
                />
            </div>

            <div>
                <PlaceholderText 
                    placeholder="Home"
                />
                <PlaceholderText 
                    placeholder="Services"
                />
                <PlaceholderText 
                    placeholder="Contacts"
                />
                <PlaceholderText 
                    placeholder="Jobs"
                />
            </div>

            <div>
                <button>Click Me</button>
                <button>See More</button>
            </div>
            
        </div>
    )
}