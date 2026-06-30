import { images } from '../assets/images/imageConfig';
import styles from './JoinJourney.module.css';

export default function JoinJourney() {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.inner}>
        <div className={styles.imageColumn}>
          <img
            src={images.joinJourneyPortrait}
            alt="Travelers gathered around a beach campfire at dusk"
            className={styles.sideImage}
           
          />
        </div>

        <div className={styles.content}>
          <p className={styles.heading}>Join the Journey</p>
          <h2 className={styles.label}>Matescape is growing. Shaped by the people who join along the way.</h2>
          <p className={styles.sub}>
          Join curated experiences currently running across Nayarit and Oaxaca. Expanding into Puerto Escondido, Mazunte, and beyond.
          </p>
          <p className={styles.sub}>Follow the journey, join upcoming experiences, and help shape how Matescape grows.</p>

          <div className={styles.infoBox}>
            <div className={styles.infoTop}>
              <div className={styles.infoCell}>
                <h3 >Join Our Upcoming Experiences</h3>
                <p >Find curated moments that fit your trip, wherever you are in Mexico.</p>
              </div>
              <div className={styles.infoCell}>
                <h3>Follow the Journey</h3>
                <p >See new places, new experiences, and what’s unfolding on the ground.</p>
              </div>
            </div>
            <div className={styles.infoBottom}>
              <h3 >Shape what comes next</h3>
              <p >Your experience helps define where we go, and how we grow.</p>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="https://instagram.com"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on Instagram
            </a>
            <a href="#experiences" className={styles.btnSecondary}>
              Join Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
