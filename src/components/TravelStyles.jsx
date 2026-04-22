import { images } from '../assets/images/imageConfig';
import styles from './TravelStyles.module.css';

const travelStyles = [
  {
    img: images.activeAdventure,
    title: 'Active & Adventure',
    desc: 'For travelers who want to move, explore, and discover places beyond the typical tourist path. Think jungle hikes ending with sunset drinks on the beach, camping near waterfalls, surf sessions, and coastal trails leading to hidden viewpoints.',
  },
  {
    img: images.innerWellness,
    title: 'Inner & Wellness',
    desc: 'For those ready to slow down and reconnect. Sunrise yoga, meditation sessions, breathwork, and mindful mornings in peaceful natural settings designed to restore balance and clarity.',
  },
  {
    img: images.foodCulture,
    title: 'Food & Culture',
    desc: 'For travelers who experience a place through its people. Intimate dinners at a local\'s home, shared meals, storytelling evenings, and cultural moments that reveal the real soul of a destination.',
  },
];

export default function TravelStyles() {
  return (
    <section className={styles.section} id="styles">
      <div className={styles.inner}>
        <div className={styles.label}>Travel Styles</div>
        <h2 className={styles.heading}>Three Ways to Explore. One Authentic Place.</h2>

        <div className={styles.grid}>
          {travelStyles.map((style) => (
            <div key={style.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={style.img} alt={style.title} />
              </div>
              <h3 className={styles.cardTitle}>{style.title}</h3>
              <p className={styles.cardDesc}>{style.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          <span className={styles.noteIcon} aria-hidden="true">
            ✨
          </span>{' '}
          Every experience is designed to feel personal and authentic. Often in small groups, unique locations, or alongside locals who share their stories and traditions.
        </p>
      </div>
    </section>
  );
}
