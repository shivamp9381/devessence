import {React, useEffect} from "react";
import styles from "./process.module.css";
import { FaComments, FaMapSigns, FaCode, FaRocket } from "react-icons/fa"; // Icons for each step
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    id: 1,
    icon: <FaComments className={styles.icon} />,
    title: "Consultation",
    description: "Understand client needs and gather requirements.",
    animation: "fade-up",
  },
  {
    id: 2,
    icon: <FaMapSigns className={styles.icon} />,
    title: "Planning",
    description: "Craft a strategic roadmap for project success.",
    animation: "fade-left",
  },
  {
    id: 3,
    icon: <FaCode className={styles.icon} />,
    title: "Development",
    description: "Build tailored software solutions with precision.",
    animation: "fade-right",
  },
  {
    id: 4,
    icon: <FaRocket className={styles.icon} />,
    title: "Delivery",
    description: "Deploy the solution and ensure quality results.",
    animation: "fade-up",
  },
];

const OurProcess = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
      
  return (
    <section className={styles.processSection}>
      <h2 className={styles.sectionTitle}>Our Process</h2>
      <p className={styles.tagline}>
        From consultation to delivery, we ensure every step is seamless and
        efficient.
      </p>
      <div className={styles.stepsGrid}>
        {processSteps.map((step) => (
          <div
            key={step.id}
            className={styles.stepCard}
            data-aos={step.animation}
          >
            <div className={styles.iconWrapper}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
