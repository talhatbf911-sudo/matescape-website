import styles from './FirstExperiences.module.css';

// Import the random image directly
import campFire from '../assets/images/campfire.png';
import goldenHour from '../assets/images/goldenhour.png';
import hiddenPlaces from '../assets/images/hiddenplaces.png';
import sharedNights from '../assets/images/sharednights.png';
import sunrise from '../assets/images/sunrise.png';
import weekendEscapes from '../assets/images/weekendescapes.png';

const experiences = [
  {
    title: 'Sunrise Club',
    desc: 'Slow, beautiful starts to the day. Sunrise hikes, morning swims, beach yoga, breathwork, or coffee with a view.',
    img: sunrise,
  },
  {
    title: 'Golden Hour Sessions',
    desc: 'Sunset sailing, hidden beach gatherings, rooftop drinks, live music, fresh coconuts, mezcal, and nights that unfold naturally',
    img: goldenHour,
  },
  {
    title: 'Hidden Places',
    desc: 'Jungle trails, secret beaches, mountain viewpoints, natural pools, quiet roads, and hidden spots most travelers never find.',
    img: hiddenPlaces,
  },
  {
    title: 'Campfire & Stargazing Nights',
    desc: 'Barefoot evenings under open skies. Firelight gatherings in nature: in the mountains, near waterfalls, or in beautiful natural settings, with acoustic music, shared drinks, stories, laughter, and stargazing.',
    img: campFire,
  },
  {
    title: 'Shared & Local Table Nights',
    desc: 'Long dinners at local homes, outdoors under the stars, or around a fire near the beach with food, music, and conversation.',
    img: sharedNights,
  },
  {
    title: 'Weekend Escapes that feel like a reset',
    desc: 'Camping under the stars, surf weekends, nature stays, cabins in the mountains, waterfall trips, and remote beaches, designed for exploration, connection, and good energy.',
    img: weekendEscapes,
  },
];

export default function FirstExperiences() {
  return (
    <section className={styles.section} id="experiences">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Matescape Experiences</h2>
        <div className={styles.sub}>
          <p>Curated moments designed to feel natural, flexible, and relaxed.</p>
          <p>Some are quiet and personal. Others bring together small groups of like-minded travelers in a relaxed way.</p>
          <br></br>
          <p>Always intentional. Never rushed. Here's what that looks like:</p>
        </div>

        <div className={styles.grid}>
          {experiences.map((exp) => (
            <article key={exp.title} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={exp.img} alt={exp.title} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardDesc}>{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}