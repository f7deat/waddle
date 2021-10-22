import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/filter.module.css';

export const Filter = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get(`https://docs.google.com/spreadsheets/d/1f93_oo5mQM8sY1eg-HEz6JI3qzYSH1_y7wGWCN-fsB0/gviz/tq?tqx=out:json`)
    }, [])

    return (
        <div className={styles.filter}>
          <div className={styles.title}>Filter</div>
          <div className={styles.categories}>
              <div className={styles.title}>
                  Danh mục
              </div>
              <div className={styles.categoryList}>

              </div>
          </div>
        </div>
    )
}