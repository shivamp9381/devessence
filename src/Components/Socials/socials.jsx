import React from 'react';
import styles from './socials.module.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialIcons = () => {
  const handleWhatsappClick = () => {
    window.open('https://wa.me/+919305226581', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:9305226581'; // Corrected string
  };

  return (
    <div className={styles.iconContainer}>
      <div className={styles.socialIcons}>
        <button className={styles.whatsappIcon} onClick={handleWhatsappClick}>
          <FaWhatsapp size={28} />
        </button>
        <button className={styles.phoneIcon} onClick={handlePhoneClick}>
          <FaPhone size={28} />
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
