import styles from "./NavBar1.module.css"

function NavBarCont1({children}) {
  return (
    <div className={styles.NavBarMainCont}>{children}</div>
  )
}

function NavBar1TxtandButtonCont({children}) {
  return (
    <div className={styles.NavBarTxtBtnCont}>{children}</div>
  )
}

function NavBar1TxtCont({children}) {
    return (
      <div className={styles.NavBarTxtCont}>{children}</div>
    )
}

function NavBar1ButtonCont({children}) {
    return (
      <div className={styles.NavBarBtnCont}>{children}</div>
    )
}

export {NavBarCont1, NavBar1TxtandButtonCont, NavBar1TxtCont, NavBar1ButtonCont}