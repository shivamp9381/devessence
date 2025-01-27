import React, { useEffect } from "react";
import styles from "./testimonial.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "DevEssence transformed our business with cutting-edge cloud solutions. Highly recommend their services!",
    avatar: "https://via.placeholder.com/80", // Replace with client photo
  },
  {
    name: "Sarah Smith",
    position: "CTO, InnovateX",
    message:
      "Their expertise in AI integration is unmatched. Our systems are now smarter and more efficient than ever!",
    avatar: "https://via.placeholder.com/80",
  },
  {
    name: "Mike Johnson",
    position: "Founder, StartupWorks",
    message:
      "From web development to DevOps, DevEssence delivers excellence every step of the way.",
    avatar: "https://via.placeholder.com/80",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <p className={styles.tagline}>
        Hear from our clients how DevEssence delivers *Smart Solutions, Faster
        Results.*
      </p>
      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <div
            className={styles.testimonialCard}
            key={index}
            data-aos="zoom-in"
          >
            <div className={styles.cardFront}>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className={styles.avatar}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.position}>{testimonial.position}</p>
            </div>
            <div className={styles.cardBack}>
              <p className={styles.message}>{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
