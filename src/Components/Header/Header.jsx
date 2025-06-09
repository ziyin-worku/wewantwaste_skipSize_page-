import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaRecycle, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link to="/">
            <FaRecycle className={styles.icon} />
            <h1>
              WeWant <span>Waste</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger icon */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skipsize">Skip Sizes</Link>
            </li>
            {/* <li><Link to="/">Services</Link></li> */}

            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.ctaButton}>
                <FaPhoneAlt /> Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
