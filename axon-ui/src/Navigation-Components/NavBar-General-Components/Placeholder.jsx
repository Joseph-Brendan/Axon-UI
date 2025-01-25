import styles from "./Placeholder.module.css"
import {NavLink} from "react-router-dom"

export default function PlaceholderText({placeholder}){
    return(
        <div>
            <h4 className={styles.placeholdertxt}>{placeholder}</h4>
        </div>
    )
}