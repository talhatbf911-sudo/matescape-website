import styles from './WhyMatescape.module.css';

export default function WhyMatescape() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.label}>The Matescape Concept</div>
            <h2 className={styles.heading}>Travel is better when it fits your vibe.</h2>

            <p>
              Some experiences are perfect solo. Others intentionally bring together small groups of
              like-minded travelers to share meaningful moments.
            </p>
            <p>A sunset hike. A hidden beach picnic. A quiet wellness morning.</p>
            <p>
              Because the most meaningful travel feels real, personal, and sometimes wonderfully
              shared.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.rightLabel}>Why Matescape?</div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <strong>Curated, not crowded</strong>
                </div>
                <p>Handpicked experiences that go beyond the typical tourist trail.</p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <strong>Your style, your pace</strong>
                </div>
                <p>Adventure, wellness, food & culture. Explore how you like to travel.</p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  <strong>Connect if you choose</strong>
                </div>
                <p>Solo or shared, every experience works beautifully either way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
