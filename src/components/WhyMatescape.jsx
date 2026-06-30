import styles from './WhyMatescape.module.css';

export default function WhyMatescape() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.inner}>
        {/* Heading spans full width */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.heading}>Travel looks different for everyone.</h2>
        </div>

        {/* Two column layout below */}
        <div className={styles.grid}>
          <div className={styles.left}>
            <p>
              Some moments are meant to be experienced alone. Others become more meaningful when shared
            </p>
            <p>A sunrise hike. A slow morning. A dinner that turns into stories.</p>
            <p>
              Matescape creates experiences that feel natural, personal, and unforced, with space to explore your own way, or connect when it feels right.
            </p>
            <p>
              No mass tourism. No rigid group tours. But curated experiences designed around different travel styles, where connection happens naturally through shared moments and beautiful places. Something you can step into whenever it fits your trip, your rhythm, and your way of exploring.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.rightLabel}>Why Matescape?</div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">
                    &#8658;
                  </span>
                  <strong>Curated, not crowded</strong>
                </div>
                <p>No mass tours. Just carefully designed experiences that feel intentional, personal & authentic.</p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">
                    &#8658;
                  </span>
                  <strong>Your style, your pace</strong>
                </div>
                <p>Explore in a way that feels natural to you. </p>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureTitle}>
                  <span className={styles.arrow} aria-hidden="true">&#8658;                  </span>
                  <strong>Solo or shared</strong>
                </div>
                <p>Every experience works both ways. Come solo, join spontaneously, or meet like minded travelers along the way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}