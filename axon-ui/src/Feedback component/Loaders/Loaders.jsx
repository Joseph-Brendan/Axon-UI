import styles from './loader.module.css';
import PropTypes from 'prop-types';

// Determinate Loader
export const Determinate = ({ progress = 0, variant = 'linear' }) => {
    const normalizedProgress = Math.min(100, Math.max(0, progress))

    if (variant === 'circular') {
        return (
            <div className={styles.circularContainer}>
                <svg className={styles.circularProgress} viewBox='0 0 100 100'>
                    <circle className={styles.circularBackground} cx={50} cy={50} r={45} />
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
        <div className={styles.determinateContainer}>
            <div className={styles.determinateBackground}>
                <div 
                className={styles.determinateBar} 
                style={{ width: `${normalizedProgress}%` }}
                />
            </div>

            <div className={styles.determinateLabel}>
                {Math.round(normalizedProgress)}%
            </div>
        </div>
    )
}

// Intermediate Loader
export const Intermediate = ({ variant = 'circular', size = 40 }) => {
    if (variant === 'linear') {
      return (
        <div className={styles.linearIndeterminate}>
          <div className={styles.linearIndeterminateBar} />
        </div>
      );
    }
  
    return (
      <div 
        className={styles.indeterminate}
        style={{ width: size, height: size }}
      />
    );
  };
  
  export const Skeleton = ({ variant = 'text', width, height }) => {
    const className = `${styles.skeleton} ${
      variant === 'circle' 
        ? styles.skeletonCircle 
        : variant === 'rect' 
          ? styles.skeletonRect 
          : styles.skeletonText
    }`;
  
    return (
      <div 
        className={className}
        style={{ 
          width: width || (variant === 'text' ? '100%' : undefined),
          height: height
        }}
      />
    );
  };
  
  export const TextLoader = ({ text = 'Loading' }) => (
    <div className={styles.textLoader}>
      {text}
      <div className={styles.dots}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  );

Determinate.propTypes = {
    progress: PropTypes.number.isRequired,
    variant: PropTypes.string.isRequired
}

Intermediate.propTypes = {
    variant: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

Skeleton.propTypes = {
    variant: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

TextLoader.propTypes = {
    text: PropTypes.string.isRequired
}
