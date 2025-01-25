import AxonLogo from "../../NavBar-General-Components/logo";
import PlaceholderText from "../../NavBar-General-Components/Placeholder";
import { NavBar1ButtonCont, NavBar1TxtandButtonCont, NavBar1TxtCont, NavBarCont1 } from "./NavBar1ContainerComps";


//  navigation nav bar 1 components but will need for some basic components to be ready
export default function NavBar1({children, logoImg}){
    return(
            <div>
                <NavBarCont1>
                    <AxonLogo 
                        logo="Assets/Logo.svg"
                    />

                    <NavBar1TxtandButtonCont>
                        <NavBar1TxtCont>
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
                                placeholder="Our Works"
                            />

                            <PlaceholderText 
                                placeholder="Contact Us"
                            />
                        </NavBar1TxtCont>

                        <NavBar1ButtonCont>
                            <button>Sign Up</button>
                        </NavBar1ButtonCont>
                    </NavBar1TxtandButtonCont>
                </NavBarCont1>
            </div>
    )
}