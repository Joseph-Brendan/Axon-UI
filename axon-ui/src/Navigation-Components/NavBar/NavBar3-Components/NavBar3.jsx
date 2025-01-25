import AxonLogo from "../../NavBar-General-Components/logo";
import PlaceholderText from "../../NavBar-General-Components/Placeholder";
import { NavBar3MainCont, NavBar3SearchCont, NavBar3TxtCont } from "./NavBar3ContainerComps";

export default function NavBar3(){
    return(
        <div>
            <NavBar3MainCont>
                <AxonLogo 
                logo="Assets/Logo.svg"
                />

                <NavBar3TxtCont>
                    <PlaceholderText 
                        placeholder="Home"
                    />

                    <PlaceholderText 
                        placeholder="About Us"
                    />

                    <PlaceholderText 
                        placeholder="Our Services"
                    />

                    <PlaceholderText 
                        placeholder="Contact Us"
                    />
                </NavBar3TxtCont>

                <NavBar3SearchCont>
                    <input type="search" placeholder="Placeholder"/>
                </NavBar3SearchCont>
            </NavBar3MainCont>
        </div>
    )
}