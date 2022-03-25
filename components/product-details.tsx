import styles from '../styles/product-details.module.css';
import { Product } from '../types/product';

interface IProductDetailProps {
    product?: Product | any;
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
                            <button type='button' className='h-10 w-10 flex items-center justify-center text-red-500 border rounded hover:text-red-500'><i className="fas fa-heart"></i></button>
                            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded"><i className="fas fa-cart-plus mr-2"></i>Đặt mua sản phẩm</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}