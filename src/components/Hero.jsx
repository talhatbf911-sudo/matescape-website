import { images } from '../assets/images/imageConfig';
import logoSrc from '../assets/Logo.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Logo integrated directly in Hero */}
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={logoSrc} alt="Matescape" />
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Welcome To Matescape!
          </h1>
          <p className={styles.heading2}>Curated travel. Shared experiences. A more personal way to explore authentic places together.</p>
          <div className={styles.sub}>
            <p>Explore Mexico through thoughtfully curated experiences. From jungle hikes to hidden beaches, designed for travelers who want to explore deeper, meet like-minded people, and experience places more authentically.</p>
            <p>We started with intimate pilot experiences in Sayulita, San Pancho and Puerto Vallarta. After expanding into Oaxaca, Puerto Escondido and Mazunte, we're now continuing further south.</p>
            <p>New region, new energy. The same idea: travel that feels personal, real, and worth sharing.</p>
            <p>Matescape is building a new way to explore places through curated experiences, like-minded travelers, and local connections, starting in Mexico.</p>
          </div>
          <div className={styles.actions}>
            <a href="#journey" className={styles.btnPrimary}>Follow Our Journey</a>
            <a href="#experiences" className={styles.btnSecondary}>Download the app</a>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img src={images.heroLandscape} alt="Beautiful Nayarit landscape" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
}
