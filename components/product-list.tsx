import { useState } from 'react';
import styles from '../styles/product-list.module.css';
import { Product } from '../types/product';

interface IProductListProps {
    products: Product[];
    product: any;
    setProduct: any;
}

export const ProductList = (props: IProductListProps) => {

    const [searchTerm, setSearchTerm] = useState('Monstera')

    const currencyFormat = (input: string) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(input));

    const handleSelectProduct = (product: any) => {
        props.setProduct(product)
    }

    return (
        <div className={styles.productList}>
            <div className={styles.search}>
                <div className={styles.searchControl}>
                    <button className={styles.searchButton}><i className="fas fa-search"></i></button>
                    <input type="text" className={styles.searchInput} placeholder="Nhập từ khóa..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                </div>
                <div className={styles.searchKeyword}>
                    <span className={styles.gray}>Kết quả tìm kiếm cho </span>
                    <span className={styles.keyword}>“{searchTerm}”</span>
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
                    props.products?.map((product: Product, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.card}>
                                <button className={styles.like}><i className="fas fa-heart"></i></button>
                                <div className={styles.thumbnail}>
                                    <img src={product.thumbnail} alt={product.name} />
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.rate}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className={styles.name} onClick={() => handleSelectProduct(product)}>{product.name}</div>
                                </div>
                                <div className={styles.action}>
                                    <div className={styles.price}>{currencyFormat(product.regularPrice)}</div>
                                    <button className={styles.addToCart}><i className="fas fa-cart-plus mr-2"></i>Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}