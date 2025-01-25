import styles from "./logo.module.css"

export default function AxonLogo({logo}){
    return(
        <div>
            <img src={logo} alt="" className={styles.logoImg}/>
        </div>
    )
}