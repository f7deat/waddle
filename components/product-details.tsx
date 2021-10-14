import { Column } from '../enums/column';
import styles from '../styles/product-details.module.css';

interface IProductDetailProps {
    product: any;
}

export const ProductDetails = (props: IProductDetailProps) => {
    return (
        <div className={styles.productDetails}>
            {
                props.product && (
                    <div className={styles.card}>
                        <div className={styles.thumbnail}>
                            <img src={props.product["c"][Column.THUMBNAIL]["v"]} alt="Thumbnail" />
                        </div>
                        <h1 className={styles.name}>{props.product["c"][Column.NAME]["v"]}</h1>
                        <div className={styles.action}>
                            <button className={styles.like}><i className="fas fa-heart"></i></button>
                            <button className={styles.addToCart}><i className="fas fa-cart-plus mr-2"></i>Thêm vào giỏ</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}