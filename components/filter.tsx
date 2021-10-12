import styles from '../styles/filter.module.css';

export const Filter = () => {
    return (
        <div className={styles.filter}>
          <div className={styles.title}>Filter</div>
          <div className={styles.categories}>
              <div className={styles.subTitle}>
                  Danh mục
              </div>
          </div>
        </div>
    )
}