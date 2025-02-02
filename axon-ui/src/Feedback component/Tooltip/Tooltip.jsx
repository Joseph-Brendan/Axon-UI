import { useState } from 'react';
import styles from './tooltip.module.css';
import PropTypes from 'prop-types';

export default function Tooltip({ 
  children, 
  content, 
  position = 'top', 
  delay = 100,
  className = '',
  tooltipClassName = '',
  color = '#fff',
  backgroundColor = 'var(--button-primary-bg)',
  animation = 'fade',
  animationDuration = 300
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
      className={`${styles.tooltipContainer} ${className}`} 
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      aria-describedby='tolltip-content'
    >
      {children}
      <div
        id='tooltip-content' 
        className={`${styles.tooltip} ${styles[position]} 
      ${isVisible ? styles.tooltipVisible : ''
      } ${styles[animation]} ${tooltipClassName}`}
       role='tooltip'
       aria-hidden={!isVisible}
       style={{ color, backgroundColor, animationDuration: `${animationDuration}ms` }} 
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
  delay: PropTypes.number,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  animation: PropTypes.oneOf(['fade', 'slide']),
  animationDuration: PropTypes.number
}