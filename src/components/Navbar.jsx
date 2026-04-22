import styles from './Navbar.module.css';
import logoSrc from '../assets/Logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={logoSrc} alt="Matescape" />
          {/* <span className={styles.logoText}>matescape</span> */}
        </div>
        <div className={styles.navLinks}>
          <a href="#why">Why Matescape</a>
          <a href="#styles">Travel Styles</a>
          <a href="#experiences">Experiences</a>
          <a href="#founders">About</a>
        </div>
        <div className={styles.navActions}>
          <a href="#journey" className={styles.btnOutline}>
            Join Us
          </a>
        </div>
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav" className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            <a href="#why" onClick={closeMenu}>Why Matescape</a>
            <a href="#styles" onClick={closeMenu}>Travel Styles</a>
            <a href="#experiences" onClick={closeMenu}>Experiences</a>
            <a href="#founders" onClick={closeMenu}>About</a>
          </div>
          <div className={styles.mobileActions}>
            <a href="#journey" className={styles.btnOutline} onClick={closeMenu}>
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
