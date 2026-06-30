import f1 from '../assets/images/founder1.jpg';
import f2 from '../assets/images/founder2.jpg';

import styles from './Founders.module.css';

const founders = [
  {
    img: f1,
    alt: 'Nicole Huls',
    name: 'Nicole Huls — Founder',
    bio: [
      'Hi, I’m Nicole, founder of Matescape. After nearly ten years in the corporate world, I decided to follow my biggest passion: travel. While exploring the world, and traveling solo at times, I realized something simple: the moments that stayed with me were never the perfectly planned ones. ',
      'They came from local culture, unexpected places, and the people I met along the way. Meeting people on the road is easy, but finding the right connection, people who match your energy, depends on the experiences you choose. What made the best moments special was exactly that: sharing a meal, joining a great hike, or other shared experiences that naturally bring together like-minded travelers and often turn into new travel friendships, something that always gave me so much energy.',
      'That’s when I realized travel could feel more personal than the way it’s usually offered. That’s what inspired Matescape. A more personal way to travel, where experiences are curated around different travel styles, and connection happens naturally through shared moments, places, and energy.'
    ],
  },
  {
    img: f2,
    alt: 'Daniyal Sultan',
    name: 'Daniyal Sultan — Co-Founder & CTO',
    bio: [
      "Hi, I’m Daniyal, co-founder of Matescape. I’ve always believed technology should make experiences feel more human, not less. ",
      'Together with Nicole, I’m building Matescape as a new kind of travel platform: helping people discover experiences, places, and like-minded travelers that genuinely match the way they love to explore. ',
      'What excites me most is creating something beyond traditional tourism: not rigid tours or transactional bookings, but authentic experiences and communities that naturally form through shared travel styles and energy. My focus is on building technology that feels seamless and easy to step into, quietly helping travelers find the right people, places, and moments wherever they are in the world. ',
      <>
        <br />
        See you somewhere along the journey.
      </>
      
    ],
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
                <div className={styles.bioWrapper}>
                  {f.bio.map((paragraph, index) => (
                    <p key={index} className={styles.bio}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}