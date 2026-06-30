import { images } from '../assets/images/imageConfig';
import styles from './CommunityTogether.module.css';

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
Traveling solo is beautiful. 
But some experiences become even better when shared with the right people.            </h2>
          </header>

          <div className={styles.contentRow}>
            
              <blockquote className={styles.quote}>
                That’s what Matescape is built around. Creating curated experiences where travelers naturally connect, without forced group dynamics or typical tour culture.
              </blockquote>
           
          </div>
        </div>
      </div>
    </section>
  );
}
