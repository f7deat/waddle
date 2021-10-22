import styles from '../styles/product-details.module.css';
import { Product } from '../types/product';

interface IProductDetailProps {
    product?: Product;
}

export const ProductDetails = (props: IProductDetailProps) => {
    return (
        <div className={styles.productDetails}>
            {
                props.product && (
                    <div className={styles.card}>
                        <div className={styles.thumbnail}>
                            <img src={props.product.thumbnail} alt={props.product.name} />
                        </div>
                        <h1 className={styles.name}>{props.product.name}</h1>
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