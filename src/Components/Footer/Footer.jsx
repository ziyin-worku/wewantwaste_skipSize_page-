import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>We Want Waste</h3>
            <p>Providing reliable and environmentally responsible waste management solutions since 2008.</p>
            <div className={styles.socialLinks}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Skip Sizes</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Domestic Skip Hire</a></li>
              <li><a href="#">Commercial Waste Management</a></li>
              <li><a href="#">Wait & Load Service</a></li>
              <li><a href="#">Waste Recycling</a></li>
              <li><a href="#">Construction waste</a></li>
              <li><a href="#">Demolition waste</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt /><span>Nottingham, England GB</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt /><span>
                  
                  0800 808 5475</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope /><span>info@wewantwaste.co.uk</span>
              </div>
              <div className={styles.contactItem}>
                <FaClock /><span>Mon-Fri: 8am-6pm, Sat: 9am-4pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} WeWantWaste. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
