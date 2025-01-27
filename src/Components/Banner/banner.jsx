// HeroBanner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './banner.module.css';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bannerContainer}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={styles.backgroundShape}
            style={{
              animationDelay: `${i * 0.5}s`,
              left: `${-20 + i * 30}%`,
              top: `${-50 + i * 20}%`
            }}
          />
        ))}
      </div>

      {/* Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Transform Your
            <span className={styles.highlightText}>Digital Vision</span>
          </h1>
          <p className={styles.subtitle}>
            Innovative software solutions crafted to accelerate your business growth
          </p>
          <button 
            onClick={() => navigate('/contact')} 
            className={styles.ctaButton}
          >
            Get Started
            <svg
              className={styles.arrowIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Animated Logo Element */}
        <div className={styles.logoAnimation}>
          <div className={styles.spinnerContainer}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={styles.spinnerBlade}
                style={{
                  transform: `rotate(${i * 60}deg)`,
                }}
              >
                <div
                  className={styles.blade}
                  style={{
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Central Glow Effect */}
          <div className={styles.centralGlow} />
        </div>
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              animationDelay: `${i * 0.3}s`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;