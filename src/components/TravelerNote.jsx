import styles from './TravelerNote.module.css';

export default function TravelerNote() {
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
                “I joined one experience and ended up exploring with the same people for the rest of the weekend.”
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