import { images } from '../assets/images/imageConfig';
import styles from './Founders.module.css';

const founders = [
  {
    img: images.nicolHuis,
    alt: 'Nicole Huls',
    name: 'Nicole Huls — Founder',
    bio: 'After nearly ten years in the corporate world, Nicole followed her greatest passion: travel. Exploring the world, often solo she found that the most meaningful moments came from sharing them with others. Discovering a destination through the eyes of locals inspired her to build something that makes those connections possible for every traveler. That idea became Matescape.',
  },
  {
    img: images.daniyalSultan,
    alt: 'Daniyal Sultan',
    name: 'Daniyal Sultan — Co-Founder & CTO',
    bio: "Daniyal brings the technical vision and platform expertise behind Matescape. Together with Nicole, he's building a travel experience that's both deeply human and beautifully designed. One where technology quietly enables the kind of authentic connection that makes travel unforgettable.",
  },
];

export default function Founders() {
  return (
    <section className={styles.section} id="founders" aria-labelledby="founders-heading">
      <div className={styles.inner}>
        <p className={styles.label}>Our Founders</p>
        <h2 id="founders-heading" className={styles.heading}>
          The People Behind Matescape
        </h2>

        <div className={styles.grid}>
          {founders.map((f) => (
            <article key={f.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={f.img} alt={f.alt} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{f.name}</h3>
                <p className={styles.bio}>{f.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
