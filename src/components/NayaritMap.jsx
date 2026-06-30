import { images } from '../assets/images/imageConfig';
import styles from './NayaritMap.module.css';
import map from '../assets/images/map.png';

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
          <h2 className={styles.heading}>Our Journey Starts in Nayarit, Mexico</h2>
          <p className={styles.body}>
          We started in Nayarit, Mexico, hosting our first small-group experiences along the Pacific coast. What began with a few sunset hikes, beach gatherings, and shared dinners quickly showed us how much people were looking for a different way to travel. Travelers joined solo, explored places beyond the usual spots, met others along the way, and often came back for more experiences afterward. Some people ended up joining multiple experiences together. Others kept in touch or crossed paths again later during their travels. Small moments, but exactly the kind of travel experience we wanted to create. 
Now we're taking the next step. Next stop: Oaxaca, Puerto Escondido & Mazunte. A completely different energy... mountains, culture, mezcal, surf towns, and slower rhythms. The same idea. A new setting. 
And we're already looking beyond: Palenque and, soon after, Guatemala. Our first step outside Mexico.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img src={map} alt="Nayarit map" className={styles.rightImage} />
          </div>
        </div>
      </div>
    </section>
  );
}