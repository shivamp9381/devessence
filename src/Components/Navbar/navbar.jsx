import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'DevOps Services',
    'AI Integration'
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <img 
              src="https://i.ibb.co/W6KLj2x/logo-removebg-preview.png" 
              alt="Devessence Logo" 
              className={styles.logoImage}
            />
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={styles.navLink}>About</a>
            
            {/* Services Dropdown */}
            <div className={styles.dropdownContainer}>
              <button 
                className={styles.dropdownTrigger}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className={styles.dropdownIcon} />
              </button>
              
              <div className={styles.dropdownMenu}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className={styles.dropdownItem}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <a href="/projects" className={styles.navLink}>Projects</a>
            <a href="/blogs" className={styles.navLink}>Blogs</a>
            <a href="/contact" className={styles.contactButton}>Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="/" className={styles.mobileNavLink}>Home</a>
          <a href="/about" className={styles.mobileNavLink}>About</a>
          
          <div className={styles.mobileDropdown}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={styles.mobileDropdownTrigger}
            >
              Services
              <ChevronDown className={`${styles.mobileDropdownIcon} ${isServicesOpen ? styles.rotate : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className={styles.mobileDropdownItem}
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/projects" className={styles.mobileNavLink}>Projects</a>
          <a href="/blogs" className={styles.mobileNavLink}>Blogs</a>
          <a href="/contact" className={styles.mobileContactButton}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;