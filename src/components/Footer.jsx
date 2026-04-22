import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>◎</span>
          <span className={styles.logoText}>matescape</span>
        </div>
        <p className={styles.tagline}>Curated travel. Shared experiences.</p>
        <p className={styles.copy}>© {new Date().getFullYear()} Matescape. All rights reserved.</p>
      </div>
    </footer>
  );
}
