import { useState } from 'react';
import styles from './tooltip.module.css';
import PropTypes from 'prop-types';

export default function Tooltip({ 
  children, 
  content, 
  position = 'top', 
  delay = 100
}) {
  const [isVisible, setIsVisible] = useState(false);
  let timeout;

  // Show tooltip after delay
  const showTooltip = () => {
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }

  // Hide tooltip
  const hideTooltip = () => {
    clearInterval(timeout);
    setIsVisible(false);
  }

  return (
    <div 
    className={styles.tooltipContainer} 
    onMouseEnter={showTooltip} 
    onMouseLeave={hideTooltip}
    >
      {children}
      <div 
      className={`${styles.tooltip} ${styles[position]} 
      ${isVisible ? styles.tooltipVisible : ''
      }`}
       role='tooltip' 
      >
        {content}
      </div>      
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  delay: PropTypes.number
}