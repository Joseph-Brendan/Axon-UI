import { useEffect, useState } from "react";
import styles from "./Snackbar.module.css";
import PropTypes from "prop-types";

export default function Snackbar ({ 
    isOpen, 
    onClose, 
    message, 
    action,
    autoHideDuration = 5000,
    variant = "default"
}) {
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        if(isOpen) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, autoHideDuration);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose, autoHideDuration]);

    if(!isOpen) return null;

  return (
    <div className={styles.snackbarContainer}>
        <div 
            className={`${styles.snackbar} 
            ${styles[variant]} ${isVisible ? styles.snackbarVisible: ''
            }`}
              role="alert"
            >
            <span className={styles.message}>{message}</span>
            {action && (
                <button className={styles.action} onClick={action.onClick}>{action.label}</button>
            )}
        </div>
    </div>
  )
}

Snackbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    action: PropTypes.object,
    autoHideDuration: PropTypes.number,
    variant: PropTypes.oneOf(["default", "success", "error", "warning", "info"])
}
