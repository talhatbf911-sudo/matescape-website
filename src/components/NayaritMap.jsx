import { images } from '../assets/images/imageConfig';
import styles from './NayaritMap.module.css';

const locations = [
  { id: 'sayulita', name: 'Sayulita', vibe: 'Surf village soul', icon: 'waves', wide: false },
  { id: 'sanPancho', name: 'San Pancho', vibe: 'Bohemian & laid-back', icon: 'palm', wide: false },
  { id: 'puertoVallarta', name: 'Puerto Vallarta', vibe: 'Culture & coastline', icon: 'city', wide: true },
];

function LocationIcon({ type }) {
  const stroke = '#1a1510';
  const common = { fill: 'none', stroke, strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'waves') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path {...common} d="M2 12c2.5 0 2.5 3 5 3s2.5-3 5-3 2.5 3 5 3 2.5-3 5-3M2 17c2.5 0 2.5 3 5 3s2.5-3 5-3 2.5 3 5 3 2.5-3 5-3" />
      </svg>
    );
  }
  if (type === 'palm') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path {...common} d="M12 20V10M12 10c-3-4-6-4-8-1M12 10c3-4 6-4 8-1M12 10c-2-5-1-8 3-9M12 10c2-5 1-8-3-9" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path {...common} d="M4 20V10h4v10M10 20V6h4v14M16 20v-8h4v8M2 20h20" />
    </svg>
  );
}

export default function NayaritMap() {
  const bg = images.nayaritJourneyBg;

  return (
    <section
      className={styles.section}
      id="nayarit"
      style={{ '--nayarit-bg': `url(${bg})` }}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Our Starting Point</p>
          <h2 className={styles.heading}>Our Journey Starts in Nayarit, Mexico</h2>
          <p className={styles.body}>
            We&apos;re launching our first pilot experiences on Mexico&apos;s stunning Pacific coast. A region
            celebrated for its vibrant community, jungle landscapes, surf culture, and breathtaking beaches.
          </p>
          <p className={styles.body}>
            Over the coming months, we&apos;ll be testing small-group experiences together with travelers and local
            partners, from sunset hikes and beach picnics to wellness mornings and local gatherings.
          </p>
        </div>

        <div className={styles.right}>
          {locations.map((loc) => (
            <article
              key={loc.id}
              className={`${styles.locCard} ${loc.wide ? styles.locCardWide : ''}`}
            >
              <div className={styles.iconWrap} aria-hidden>
                <LocationIcon type={loc.icon} />
              </div>
              <div className={styles.locInfo}>
                <h3 className={styles.locTitle}>{loc.name}</h3>
                <p className={styles.locTagline}>{loc.vibe}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
