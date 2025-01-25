import styles from "./NavBarContainerComps.module.css"

function NavBar({children}) {
  return (
    <div className={styles.NavbarMainContainer}>
        {children}
    </div>
  )
}


function NavBarLogoAndContentContainer({children}) {
  return (
    <div className={styles.LogoNavTxtContainer}>{children}</div>
  )
}

function NavBarContentContainer({children}) {
    return (
      <div className={styles.navTxt}>{children}</div>
    )
}


function NavBarButtonContainer({children}) {
  return (
    <div className={styles.btnContainer}>{children}</div>
  )
}


export {NavBar, NavBarLogoAndContentContainer, NavBarContentContainer, NavBarButtonContainer}
