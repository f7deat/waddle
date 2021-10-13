import styles from '../styles/product-list.module.css';

interface IProductListProps {
    products: any
}

export const ProductList = (props: IProductListProps) => {
    return (
        <div className={styles.productList}>
            <div className="search">
                <input type="text" className="input-search" placeholder="Nhập từ khóa..." />
                <div className="search-keyword">
                    <span className="label">Kết quả tìm kiếm cho </span>
                    <span className="keyword">“Monstera”</span>
                </div>
            </div>
            <div className={styles.sort}>
                <span className="label">Sắp xếp</span>
                <button className={`${styles.btnSort} ${styles.active}`}>Liên quan</button>
                <button className={styles.btnSort}>Mua nhiều</button>
                <button className={styles.btnSort}>Mới nhất</button>
                <button className={styles.btnSort}>Giá</button>
            </div>
            <div className={styles.list}>
                {
                    props.products?.map((product: any, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.card}>
                                <div className={styles.thumbnail}>
                                    <img src={product["c"][6]["v"]} alt={product["c"][1]["v"]} />
                                </div>
                                <div className={styles.name}>{product["c"][1]["v"]}</div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}