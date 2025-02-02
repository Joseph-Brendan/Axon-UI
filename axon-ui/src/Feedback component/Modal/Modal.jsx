import PropTypes from 'prop-types';
import styles from "./modal.module.css";
import { useEffect, useRef } from 'react';

export default function Modal({ 
    isOpen = false, 
    onClose, 
    children = null, 
    title = 'Modal Title', 
    className = '',
    overlayClassName = '',
    headerClassName = '',
    contentClassName = '',
    footerClassName = '',
    width = '35%',
    footer = null 
}) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    // Add event listener to close the modal when the escape key is pressed
    useEffect(() => {
        const handleEscape = (e) =>  {
            if(e.key === "Escape") {
                onClose();
            }
        }

        if(isOpen) {
            document.addEventListener("keydown", handleEscape);
            modalRef.current.focus(); // Focus the modal when it opens
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

    // Trap focus inside the modal
    useEffect(() => {
        const handleTabKey = (e) => {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            // Shift + Tab: Move focus backwards
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus(); // Wrap focus to the last element
                    e.preventDefault(); // Prevent default tab behaviour
                }
            } else {
                // Tab: Move focus forwards
                if (document.activeElement === lastElement) {
                    firstElement.focus(); // Wrap focus to the first element
                    e.preventDefault(); // Prevent default tab behaviour
                }
            }
        }

        const currentModalRef = modalRef.current;
        
        if (isOpen) {
            currentModalRef.addEventListener('keydown', handleTabKey);
        }

        return () => {
            if(currentModalRef) {
                currentModalRef.removeEventListener('keydown', handleTabKey);
            }
        }
    }, [isOpen])

    if (!isOpen) return null;

  return (
    <div 
        // Add the class overlayVisible when the modal is open
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''} ${overlayClassName}`} 
        ref={overlayRef} 
        role='dialog'
        aria-modal='true'
        onClick={handleOverlayClick}
    >
        <div className={`${styles.modal} ${className}`} 
        ref={modalRef} 
        tabIndex={-1}
        style={{ width }}
        >
            <div className={`${styles.header} ${headerClassName}`}>
                <h2 className={styles.title}>{title}</h2>
                <button 
                    className={styles.closeButton} 
                    onClick={onClose}
                    aria-label='Close Modal'
                    ref={closeButtonRef}
                    >
                        &times;
                    </button>
            </div>

            <div className={`${styles.content} ${contentClassName}`}>
                {children}
            </div>

            {footer && <div className={`${styles.footer} ${footerClassName}`}>{footer}</div> }
        </div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    headerClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    footerClassName: PropTypes.string,
    animation: PropTypes.oneOf(['fade', 'slide']),
    animationDuration: PropTypes.number,
    width: PropTypes.string,
    footer: PropTypes.node
}
