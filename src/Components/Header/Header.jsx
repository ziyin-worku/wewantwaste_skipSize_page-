import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaRecycle, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <FaRecycle className={styles.icon} />
          <h1>
          WeWant <span>Waste</span>
          </h1>
        </div>

        {/* Hamburger icon */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className={styles.active}>
                Skip Sizes
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>

        <button className={styles.ctaButton}>
          <FaPhoneAlt /> Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
