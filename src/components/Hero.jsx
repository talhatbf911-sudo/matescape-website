import { images } from '../assets/images/imageConfig';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Curated Travel. Shared Experiences. Explore Authentic Places Together.
          </h1>
          <p className={styles.sub}>
            Explore Nayarit through thoughtfully curated experiences. From jungle hikes to hidden beaches, designed for travelers who want to explore deeper and connect with others along the way.
          </p>
          <p className={styles.launch}>
            Launching our first pilot experiences in Sayulita, San Pancho and Puerto Vallarta.
          </p>
          <div className={styles.actions}>
            <a href="#journey" className={styles.btnPrimary}>Follow Our Journey</a>
            <a href="#experiences" className={styles.btnSecondary}>Join Our First Experiences</a>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img src={images.heroLandscape} alt="Beautiful Nayarit landscape" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
}
