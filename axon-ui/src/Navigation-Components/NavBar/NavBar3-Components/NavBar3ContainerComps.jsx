import styles from "./NavBar3.module.css"

function NavBar3MainCont({children}) {
  return (
    <div className={styles.NavBarMainCont}>{children}</div>
  )
}

function NavBar3TxtCont({children}) {
  return (
    <div className={styles.NavBar3TxtCont}>{children}</div>
  )
}

function NavBar3SearchCont({children}) {
    return (
      <div>{children}</div>
    )
  }


export {NavBar3MainCont, NavBar3TxtCont, NavBar3SearchCont}