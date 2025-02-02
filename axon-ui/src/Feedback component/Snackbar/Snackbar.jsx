import { useEffect, useState } from "react";
import styles from "./snackbar.module.css";
import PropTypes from "prop-types";

export default function Snackbar ({ 
    isOpen = false, 
    onClose, 
    message = 'This is a snackbar notification!', 
    action = null,
    autoHideDuration = 5000,
    variant = "default",
    className = '',
    messageClassName = '',
    actionClassName = '',
    color = '#fff', // Default text color
    backgroundColor = 'var(--button-primary-bg)' // Default background color
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
            className={`${styles.snackbar} ${className}
            ${styles[variant]} ${isVisible ? styles.snackbarVisible: ''
            }`}
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              style={{ color, backgroundColor }}
            >
            <span className={`${styles.message} ${messageClassName}`}>{message}</span>
            {action && (
                <button 
                    className={`${styles.action} 
                    ${actionClassName}`} 
                    onClick={action.onClick}
                    aria-label={action.label}
                    style={{ color }}
                    >
                        {action.label}
                </button>
            )}
        </div>
    </div>
  )
}

Snackbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    action: PropTypes.shape({
        label: 'Dismiss',
        onClick: PropTypes.func.isRequired
    }),
    autoHideDuration: PropTypes.number,
    variant: PropTypes.oneOf(["default", "success", "error", "warning", "info"]),
    className: PropTypes.string,
    messageClassName: PropTypes.string,
    actionClassName: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
}
