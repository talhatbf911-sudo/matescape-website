import styles from './TravelerNote1.module.css';

export default function TravelerNote1() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <div className={styles.content}>
            {/* Vertical line with Traveler Note tag */}
            <div className={styles.lineWrapper}>
              <div className={styles.verticalLine}>
                <span className={styles.tag}>TRAVELER NOTE</span>
              </div>
            </div>
            
            {/* Main text content - left aligned within centered container */}
            <div className={styles.textContent}>
              <h2 className={styles.heading}>
                “Everyone arrived as strangers, but it never felt like a group tour. It just felt natural.”
              </h2>
              <p className={styles.subText}>
               <b>Matescape Traveler </b> · May 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}