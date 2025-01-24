import AxonLogo from "../../NavBar-General-Components/logo";
import { NavBar, NavBarButtonContainer, NavBarContentContainer, NavBarLogoAndContentContainer } from "./NavBarContainerComps";
import PlaceholderText from "../../NavBar-General-Components/Placeholder";

export default function NavBar2 (){
    return(
        <>
            <NavBar>
                <NavBarLogoAndContentContainer>
                    <AxonLogo
                        logo="Assets/Logo.svg"
                    />

                    <NavBarContentContainer>
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
                    </NavBarContentContainer>
                </NavBarLogoAndContentContainer>

                <NavBarButtonContainer>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </NavBarButtonContainer>
            </NavBar>
        </>
    )
}