import React from "react";
import styles from "./about.module.css";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";

const teamMembers = [
  { name: "Shivam", role: "Founder & CEO", img: "https://i.ibb.co/w6ddxYh/Whats-App-Image-2025-01-28-at-13-51-24-1.jpg" },  
  { name: "Suvansh Choudhary", role: "Founder & CEO", img: "" },
  { name: "Shivangi Pandey", role: "HR & Social Media Manager", img: "https://i.ibb.co/zHM4YND/Whats-App-Image-2025-01-28-at-13-51-24.jpg" },
  { name: "Vaidik Shresth", role: "Lead Developer", img: "https://i.ibb.co/mNFmg0C/Whats-App-Image-2025-01-28-at-13-51-23-2.jpg" },
  { name: "Swapnil Raj", role: "Developer", img: "https://i.ibb.co/TwgzZ4k/Whats-App-Image-2025-01-28-at-13-51-23-1.jpg" },
  { name: "Shivam Tiwari", role: "Marketting Lead", img: "https://i.ibb.co/bHBrX8C/Whats-App-Image-2025-01-28-at-13-51-23.jpg" },
  { name: "Utkarsh Kumar", role: "Cloud Engineer", img: "" },
];

const AboutUs = () => {
  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>About DevEssence</h1>
        <p className={styles.subtitle}>Smart Solutions, Faster Results</p>
      </section>

      {/* Company Info Section */}
      <section className={styles.companyInfo}>
        <h2>Who We Are</h2>
        <p>
          DevEssence is a leading software solutions provider dedicated to
          delivering high-quality, scalable, and innovative solutions tailored
          to our clients' needs.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className={styles.visionMission}>
        <div className={styles.vision}>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted and innovative software development company
            delivering exceptional digital solutions.
          </p>
        </div>
        <div className={styles.mission}>
          <h3>Our Mission</h3>
          <p>
            Empower businesses with cutting-edge software that enhances
            efficiency and drives success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              <img src={member.img} alt={member.name} className={styles.avatar} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;