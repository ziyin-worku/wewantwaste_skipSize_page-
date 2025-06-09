import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>We Want Waste</h3>
            <p>Providing reliable and environmentally responsible waste management solutions since 2008.</p>
            <div className={styles.socialLinks}>
              <Link to="#"><FaFacebookF /></Link>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaInstagram /></Link>
              <Link to="#"><FaLinkedinIn /></Link>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Skip Sizes</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">About Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Our Services</h3>
            <ul>
              <li><Link to="#">Domestic Skip Hire</Link></li>
              <li><Link to="#">Commercial Waste Management</Link></li>
              <li><Link to="#">Wait & Load Service</Link></li>
              <li><Link to="#">Waste Recycling</Link></li>
              <li><Link to="#">Construction waste</Link></li>
              <li><Link to="#">Demolition waste</Link></li>
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
