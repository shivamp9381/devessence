import React, { useState } from "react";
import styles from "./faqs.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
  {
    question: "What services does DevEssence provide?",
    answer:
      "DevEssence offers a wide range of software solutions, including web development, mobile app development, cloud solutions, DevOps services, AI integration, and IT consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline depends on the project's complexity and scope. However, we aim to deliver most projects within 4-12 weeks after the initial consultation.",
  },
  {
    question: "Do you provide post-delivery support?",
    answer:
      "Yes, we provide maintenance, updates, and support for all delivered projects to ensure everything runs smoothly.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with various industries, including e-commerce, healthcare, fintech, education, and startups. Our solutions are tailored to meet the unique needs of each sector.",
  },
  {
    question: "How do I get started with DevEssence?",
    answer:
      "Simply contact us through the website, schedule a consultation, and we’ll guide you through the process of bringing your project to life.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqsSection}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <p className={styles.tagline}>
        Find answers to the most common questions about our services and
        processes.
      </p>
      <div className={styles.faqsContainer}>
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              {activeIndex === index ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
