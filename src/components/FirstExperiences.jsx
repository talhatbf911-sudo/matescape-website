import styles from './FirstExperiences.module.css';

const experiences = [
  {
    title: 'Sunset Jungle Hike',
    desc: 'Walk from San Pancho to Sayulita through jungle trails and hidden beaches. We end the evening with sunset drinks by a beach fire.',
  },
  {
    title: 'Monkey Mountain Sunrise',
    desc: 'An early morning hike to the summit of Cerro del Mono. After the climb we share a relaxed breakfast picnic overlooking the Pacific.',
  },
  {
    title: 'Hidden Beach Picnic',
    desc: 'Discover quiet coastal spots most travelers never find and enjoy them with fresh fruit, blankets and good company.',
  },
  {
    title: 'Sunrise Yoga Session',
    desc: 'Start the day with yoga on a peaceful beach as the first light appears over the ocean.',
  },
  {
    title: 'Intimate Local Dinners',
    desc: 'Share food, stories and laughter at a local\'s table. The kind of evening travelers remember long after the trip.',
  },
];

export default function FirstExperiences() {
  return (
    <section className={styles.section} id="experiences">
      <div className={styles.inner}>
        <p className={styles.label}>First Experiences</p>
        <h2 className={styles.heading}>Our First Experiences</h2>
        <p className={styles.sub}>
          We&apos;re starting small, testing a series of thoughtfully designed experiences with intimate groups of travelers. Each one is personal, relaxed, and authentic — creating space to connect with the place and, if you like, with others who share your curiosity.
        </p>

        <div className={styles.grid}>
          {experiences.map((exp) => (
            <article key={exp.title} className={styles.card}>
              <div className={styles.cardAccent} aria-hidden />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardDesc}>{exp.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaHeading}>Want to join one of the first experiences?</h3>
          <p className={styles.ctaSub}>
            We share upcoming pilot events and last-minute spots through Instagram as we test new experiences in the region.
          </p>
          <a
            href="https://instagram.com"
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Matescape
          </a>
        </div>
      </div>
    </section>
  );
}
