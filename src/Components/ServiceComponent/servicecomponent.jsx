import React from "react";
import styles from "./servicecomponent.module.css";

const servicesData = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and dynamic websites tailored to your needs.",
    icon: "🌐", // Replace with an icon from a library or custom SVG
  },
  {
    title: "Mobile Development",
    description: "Crafting intuitive and high-performance mobile applications.",
    icon: "📱",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud solutions for your business growth.",
    icon: "☁️",
  },
  {
    title: "DevOps Services",
    description: "Streamlining your development process with DevOps best practices.",
    icon: "⚙️",
  },
  {
    title: "AI Integration",
    description: "Adding intelligence to your solutions with AI-powered tools.",
    icon: "🤖",
  },
  {
    title: "IT Consulting",
    description: "Providing expert IT guidance for your business success.",
    icon: "💻",
  },
];

const ServiceComponent = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <p className={styles.tagline}>
        Smart Solutions, Faster Results – Tailored for Your Business
      </p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div
            className={styles.serviceCard}
            key={index}
            data-aos="fade-up" // Add animations using AOS library (optional)
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComponent;
