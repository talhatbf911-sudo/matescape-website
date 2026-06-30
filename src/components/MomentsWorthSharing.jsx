import styles from './MomentsWorthSharing.module.css';

import mws1 from '../assets/images/mws1.png';
import mws2 from '../assets/images/mws2.png';
import mws3 from '../assets/images/mws3.png';

const galleryImages = [
  {
    img: mws1,
    alt: 'Gallery image 1',
    desc: 'A sunset after a long day exploring',
  },
  {
    img: mws2,
    alt: 'Gallery image 2',
    desc: 'A dinner that turns into plans for the next trip',
  },
  {
    img: mws3,
    alt: 'Gallery image 3',
    desc: 'Meeting people with a similar energy and way of exploring',
  },
];

export default function MomentsWorthSharing() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
Moments Worth Sharing
          </h2>

          <div className={styles.galleryGrid}>
            {galleryImages.map((item, index) => (
              <div key={index} className={styles.galleryItem}>
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.alt} />
                </div>
                <p className={styles.imageDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}