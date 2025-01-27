// PhilosophySection.jsx
import React, { useEffect, useRef } from 'react';
import { Code, Gauge, Target } from 'lucide-react';
import styles from './philosophy.module.css';

const PhilosophySection = () => {
  const sectionRef = useRef(null);

  const goAbout = () => {
    window.location.href = "/about"
}
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={sectionRef}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.logoSpinner}>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={styles.spinnerBlade}
              style={{ transform: `rotate(${i * 60}deg)` }}
            />
          ))}
        </div>
        <h2 className={styles.title}>The DevEssence Philosophy</h2>
        <p className={styles.subtitle}>
          Transforming ideas into powerful software solutions with innovation, 
          precision, and excellence.
        </p>
        <div onClick={goAbout} className={styles.cta}>
          LEARN MORE ABOUT OUR TEAM →
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.cardLeft}`}>
          <div className={styles.iconWrapper}>
            <Code className={styles.icon} />
            <div className={styles.iconRing} />
          </div>
          <h3>INNOVATIVE SOLUTIONS</h3>
          <p>
            We craft cutting-edge software solutions using the latest technologies
            and best practices, ensuring scalable and future-proof applications
            that drive your business forward.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardCenter}`}>
          <div className={styles.iconWrapper}>
            <Gauge className={styles.icon} />
            <div className={styles.iconRing} />
          </div>
          <h3>RAPID DEVELOPMENT</h3>
          <p>
            Our agile approach and expertise enable us to deliver high-quality
            solutions quickly, helping you stay ahead in today's fast-paced
            digital landscape.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardRight}`}>
          <div className={styles.iconWrapper}>
            <Target className={styles.icon} />
            <div className={styles.iconRing} />
          </div>
          <h3>MEASURABLE IMPACT</h3>
          <p>
            We focus on creating solutions that deliver tangible results,
            optimizing your processes and helping achieve your business
            objectives efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;