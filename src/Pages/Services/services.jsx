import React from 'react';
import { Globe2, Smartphone, Cloud, Brain, GitBranch, Code, ArrowRight } from 'lucide-react';
import styles from './services.module.css';
import { div } from 'framer-motion/client';
import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/navbar';
import SocialIcons from '../../Components/Socials/socials';

function Services() {
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices. From responsive websites to complex web applications, we deliver solutions that drive business growth.",
      features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      icon: <Smartphone />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices. We build apps that users love to interact with.",
      features: ["iOS Development", "Android Development", "Cross-platform Solutions", "Mobile UI/UX Design"]
    },
    {
      icon: <Cloud />,
      title: "Cloud Services",
      description: "Scalable cloud solutions that optimize your infrastructure and reduce costs. We help businesses leverage the power of cloud computing for better performance.",
      features: ["Cloud Migration", "Cloud Architecture", "Serverless Solutions", "Cloud Security"]
    },
    {
      icon: <Brain />,
      title: "AI Integration",
      description: "Cutting-edge AI solutions that transform your business processes. We integrate artificial intelligence to automate tasks and provide intelligent insights.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <GitBranch />,
      title: "DevOps Services",
      description: "Streamlined development operations that enhance productivity and deployment efficiency. We implement DevOps practices for faster and reliable delivery.",
      features: ["CI/CD Pipeline", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"]
    }
  ];

  const goContact = () => {
    window.location.href = "/contact";
  }

  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Globe2 className={styles.heroIcon} />
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>Transforming Ideas into Digital Reality</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <ArrowRight className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.cardOverlay} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaText}>Let's discuss how our services can help you achieve your goals</p>
          <button onClick={goContact} className={styles.ctaButton}>
            Get Started
            <ArrowRight className={styles.buttonIcon} />
          </button>
        </div>
      </section>
    </div>
    <SocialIcons />
    <Footer />
    </div>
  );
}

export default Services;