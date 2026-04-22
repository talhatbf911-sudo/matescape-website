import { images } from '../assets/images/imageConfig';
import styles from './CommunityTogether.module.css';

const moments = [
  'Watching the sunset after a jungle hike',
  'Sharing stories over drinks on the beach',
  'Meeting strangers who become friends',
];

export default function CommunityTogether() {
  return (
    <section className={styles.section} id="community" aria-labelledby="community-together-heading">
      <div className={styles.inner}>
        <div className={styles.imgCol}>
          <img src={images.communityTogether} alt="Travelers relaxing together on the beach at golden hour" />
        </div>

        <div className={styles.textCol}>
          <header className={styles.header}>
            <p className={styles.label}>Community Feeling</p>
            <h2 id="community-together-heading" className={styles.heading}>
              Travel Is Better Together
            </h2>
          </header>

          <div className={styles.contentRow}>
            <div className={styles.card}>
              <blockquote className={styles.quote}>
                The best memories are rarely made alone.
              </blockquote>
              <p className={styles.body}>
                Many travelers explore solo and that's beautiful. But discovering a place alongside
                like-minded people often makes the experience richer, warmer, and more memorable.
              </p>
            </div>

            <div className={styles.listCol}>
              <p className={styles.momentsLabel}>Moments Worth Sharing</p>
              <ul className={styles.moments}>
                {moments.map((m) => (
                  <li key={m}>
                    <span className={styles.bullet} aria-hidden />
                    <span className={styles.momentText}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
