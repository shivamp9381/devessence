import React from "react";
import styles from "./vision.module.css";

const Vision = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.parallaxBackground}>
        <div className={styles.content}>
          <h2 className={styles.title}>Shaping the Future of Technology</h2>
          <p className={styles.description}>
            At DevEssence, we believe in creating innovative software solutions
            that empower businesses, promote sustainability, and drive the
            digital transformation of tomorrow. Together, we can build a
            smarter, more connected world.
          </p>
          <div className={styles.goals}>
            <div className={styles.goal}>
              <h3>🚀 Driving Digital Transformation</h3>
              <p>
                We develop software solutions that help businesses stay ahead in
                a rapidly evolving technological landscape.
              </p>
            </div>
            <div className={styles.goal}>
              <h3>🌱 Sustainable Solutions</h3>
              <p>
                Our focus is on creating efficient, scalable, and environmentally
                friendly systems.
              </p>
            </div>
            <div className={styles.goal}>
              <h3>🌐 Global Empowerment</h3>
              <p>
                By collaborating with industries worldwide, we enable growth
                and innovation across sectors.
              </p>
            </div>
          </div>
          <button className={styles.ctaButton}>Learn More About Our Vision</button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
