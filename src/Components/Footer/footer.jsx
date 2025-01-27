import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Company Info Section */}
        <div className={styles.companySection}>
          <img 
            src="https://i.ibb.co/W6KLj2x/logo-removebg-preview.png" 
            alt="Devessence Logo" 
            className={styles.footerLogo} 
          />
          <p className={styles.companyDesc}>
            Innovative solutions for modern businesses. We transform ideas into powerful digital experiences.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
            <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
            <a href="#" className={styles.socialIcon}><Github size={20} /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.linksSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h3 className={styles.footerTitle}>Our Services</h3>
          <ul className={styles.linksList}>
            <li><a href="/services/web-development">Web Development</a></li>
            <li><a href="/services/mobile-development">Mobile Development</a></li>
            <li><a href="/services/cloud-solutions">Cloud Solutions</a></li>
            <li><a href="/services/devops">DevOps Services</a></li>
            <li><a href="/services/ai-integration">AI Integration</a></li>
            <li><a href="/services/consulting">IT Consulting</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <a href="mailto:info@devessence.com">info@devessence.com</a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <p>KIITUniversity,<br />Bhubaneswar, Odisha, India</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h4>
            <form className={styles.subscribeForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {currentYear} Devessence. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;