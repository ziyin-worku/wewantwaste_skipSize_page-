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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/skipsize">Skip Sizes</a>
            </li>
            {/* <li><a href="/">Services</a></li> */}

            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/contact" className={styles.ctaButton}>
                
                  <FaPhoneAlt /> Contact Us
               
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
