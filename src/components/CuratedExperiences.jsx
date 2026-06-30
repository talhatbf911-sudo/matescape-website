import styles from './CuratedExperiences.module.css';

export default function CuratedExperiences() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>
Curated experiences. Like-minded travelers. Authentic places.              </h2>
              <p className={styles.subText}>
               Traveling solo is beautiful. But some experiences become even better when shared with the right people. That's what Matescape is built around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}