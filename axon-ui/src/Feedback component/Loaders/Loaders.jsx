import styles from './loader.module.css';
import PropTypes from 'prop-types';

// Determinate Loader
export function DeterminateLoader ({ 
  progress = 0, 
  variant = 'linear', 
  className = '', 
  color = 'var(--info-state)', // Default progress color
  backgroundColor = 'var(--disabled-bg)', // Default background Color
  width = '100%', // Default width for linear variant
  height = '8px', // Default height for linear variant
  size = 100 // Default size for circular variant
}) {
    const normalizedProgress = Math.min(100, Math.max(0, progress))

    if (variant === 'circular') {
        return (
            <div className={`${styles.circularContainer} ${className}`}>
                <svg 
                  className={styles.circularProgress} 
                  viewBox='0 0 100 100'
                  role='progressbar'
                  aria-valuenow={normalizedProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label='Circular progress bar'
                  style={{ width: size, height: size }}
                  >
                    <circle 
                      className={styles.circularBackground} 
                      cx={50} 
                      cy={50} 
                      r={45} 
                      style={{ stroke: backgroundColor }}
                      />
                    <circle 
                    className={styles.circularBar} 
                    cx={50} 
                    cy={50} 
                    r={45} 
                    style={{ strokeDasharray: `${normalizedProgress * 2.827}, 282.7`, }}
                    />
                </svg>

                <div className={styles.circularLabel}>
                    {Math.round(normalizedProgress)}%
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.determinateContainer} ${className}`}>
            <div 
              className={styles.determinateBackground}
              style={{ backgroundColor, width, height }}
              >
                <div 
                  className={styles.determinateBar} 
                  style={{ width: `${normalizedProgress}%`, backgroundColor: color }}
                />
            </div>

            <div className={styles.determinateLabel}>
                {Math.round(normalizedProgress)}%
            </div>
        </div>
    )
}

DeterminateLoader.propTypes = {
  progress: PropTypes.number,
  variant: PropTypes.oneOf(['linear', 'circular']),
  className: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number
}

// Intermediate Loader
export function IntermediateLoader ({ 
  variant = 'circular', 
  size = 100, // Default size for circular variant
  className = '', // custom classname
  color = 'var(--info-state)', 
  backgroundColor = 'var(--disabled-bg)',
  width = '100%',
  height = '8px'
}) {
    if (variant === 'linear') {
      return (
        <div 
          className={`${styles.linearIntermediate} ${className}`}
          role='status'
          aria-label='Loading'
          style={{ width, height, backgroundColor }}
          >
          <div 
            className={styles.linearIntermediateBar} 
            style={{ backgroundColor: color }}
            />
        </div>
      );
    }
  
    return (
      <div 
        className={`${styles.intermediate} ${className}`}
        style={{ width: size, height: size }}
        role='status'
        aria-label='Loading'
      />
    );
  };

  IntermediateLoader.propTypes = {
    variant: PropTypes.oneOf(['linear', 'circular']),
    size: PropTypes.number,
    className: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }
  
  export function SkeletonLoader ({ 
    variant = 'text', 
    width, 
    height,
    className = '',
    color = '#f0f0f0',
    backgroundColor = '#e0e0e0' 
  }) {
    const skeletonClass = `${styles.skeleton} ${
      variant === 'circle' 
        ? styles.skeletonCircle 
        : variant === 'rect' 
          ? styles.skeletonRect 
          : styles.skeletonText
    } ${className}`;
  
    return (
      <div 
        className={skeletonClass}
        style={{ 
          width: width || (variant === 'text' ? '100%' : undefined),
          height: height,
          backgroundColor: color,
          backgroundImage: `linear-gradient(90deg, ${color}, ${backgroundColor}, ${color})`
        }}
        role='alert'
        aria-busy='true'
        aria-label='Loading content'
      />
    );
  };

  SkeletonLoader.propTypes = {
    variant: PropTypes.oneOf(['text', 'circle', 'rect']),
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  }
  
  export function TextLoader ({ 
    text = 'Loading', 
    color = 'var(--text-primary-black)', // Default text color
    dotColor = 'var(--text-primary-black)', // Default dot color
    className = ''
  }) {
    <div 
      className={`${styles.textLoader} ${className}`}
      role='status'
      aria-label='Loading'
      style={{ color }}
      >
      {text}
      <div className={styles.dots}>
        <div className={styles.dot} style={{ backgroundColor: dotColor }} />
        <div className={styles.dot} style={{ backgroundColor: dotColor }} />
        <div className={styles.dot} style={{ backgroundColor: dotColor }} />
      </div>
    </div>
  };

TextLoader.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  dotColor: PropTypes.string,
  className: PropTypes.string
}