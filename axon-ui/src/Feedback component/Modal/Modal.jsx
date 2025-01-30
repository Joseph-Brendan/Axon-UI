import PropTypes from 'prop-types';
import styles from "./modal.module.css";
import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, children, title, footer }) {
    const overlayRef = useRef(null);

    // Add event listener to close the modal when the escape key is pressed
    useEffect(() => {
        const handleEscape = (e) =>  {
            if(e.key === "Escape") {
                onClose();
            }
        }

        if(isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        if(!isOpen) {
            document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, onClose]);

    // Close the modal when the overlay is clicked
    const handleOverlayClick = (e) => {
        if(e.target === overlayRef.current) {
            onClose();
        }
    }

  return (
    <div 
        // Add the class overlayVisible when the modal is open
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} 
        ref={overlayRef} 
        role='modal'
        onClick={handleOverlayClick}
    >
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
            </div>

            <div className={styles.content}>
                {children}
            </div>

            {footer && <div className={styles.footer}>{footer}</div> }
        </div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    footer: PropTypes.node
}
