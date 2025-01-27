import React, { useState, useEffect } from 'react';
import styles from './LoadingAnimation.module.css';

const LoadingAnimation = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Start fade out animation after 2.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Show content after animation completes
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`${styles.loadingScreen} ${!isLoading ? styles.fadeOut : ''}`}>
        <div className={styles.logoContainer}>
          {/* Outer hexagon */}
          <div className={styles.hexagonOuter}></div>
          
          {/* Inner hexagon with logo */}
          <div className={styles.hexagonInner}>
            <img 
              src="https://i.ibb.co/W6KLj2x/logo-removebg-preview.png" 
              alt="Devessence Logo" 
              className={styles.logo}
            />
          </div>
          
          {/* Loading text */}
          <div className={styles.loadingText}>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>S</span>
            <span>S</span>
            <span>E</span>
            <span>N</span>
            <span>C</span>
            <span>E</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`${styles.mainContent} ${contentVisible ? styles.visible : ''}`}>
        {children}
      </main>
    </>
  );
};

export default LoadingAnimation;


