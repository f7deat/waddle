import { useState } from 'react';
import { Column } from '../enums/column';
import styles from '../styles/product-list.module.css';

interface IProductListProps {
    products: any;
    product: any;
    setProduct: any;
}

export const ProductList = (props: IProductListProps) => {

    const [searchTerm, setSearchTerm] = useState('Monstera')

    const currencyFormat = (input: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(input);

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
                    props.products?.map((product: any, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.card}>
                                <button className={styles.like}><i className="fas fa-heart"></i></button>
                                <div className={styles.thumbnail}>
                                    <img src={product["c"][Column.THUMBNAIL]["v"]} alt={product["c"][1]["v"]} />
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.rate}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className={styles.name} onClick={() => handleSelectProduct(product)}>{product["c"][1]["v"]}</div>
                                </div>
                                <div className={styles.action}>
                                    <div className={styles.price}>{currencyFormat(product["c"][4]["v"])}</div>
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