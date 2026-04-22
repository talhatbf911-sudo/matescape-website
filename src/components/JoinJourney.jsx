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
            width={540}
            height={860}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.label}>Join the Journey</p>
          <h2 className={styles.heading}>Be Part of the First Matescape Community</h2>
          <p className={styles.sub}>
            We&apos;re testing our first experiences in Nayarit and we want you with us from the very beginning.
            Follow the journey, join upcoming pilot events, and help shape the future of how travelers explore the
            world together.
          </p>

          <div className={styles.infoBox}>
            <div className={styles.infoTop}>
              <div className={styles.infoCell}>
                <h3>Follow the Journey</h3>
                <p>Stay close as we launch, learn, and grow. Get behind the scenes updates from the field.</p>
              </div>
              <div className={styles.infoCell}>
                <h3>Join Pilot Events</h3>
                <p>Be among the very first travelers to experience Matescape in Nayarit this season.</p>
              </div>
            </div>
            <div className={styles.infoBottom}>
              <h3>Shape the Future</h3>
              <p>Your feedback directly influences what Matescape becomes. This is a community-built platform.</p>
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
