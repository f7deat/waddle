import { useState } from "react";
import styles from "../styles/product-list.module.css";
import { Product } from "../types/product";

interface IProductListProps {
  products: Product[];
  product: any;
}

export const ProductList = (props: IProductListProps) => {
  const [searchTerm, setSearchTerm] = useState("Monstera");

  const currencyFormat = (input: string) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(Number(input));

  return (
    <div className={styles.productList}>
      <div className={styles.search}>
        <div className={styles.searchControl}>
          <button className={styles.searchButton}>
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Nhập từ khóa..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div className={styles.searchKeyword}>
          <span className={styles.gray}>Kết quả tìm kiếm cho </span>
          <span className={styles.keyword}>“{searchTerm}”</span>
        </div>
      </div>
      <div className={styles.sort}>
        <span className="label">Sắp xếp</span>
        <button className={`${styles.btnSort} ${styles.active}`}>
          Liên quan
        </button>
        <button className={styles.btnSort}>Mua nhiều</button>
        <button className={styles.btnSort}>Mới nhất</button>
        <button className={styles.btnSort}>Giá</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {props.products?.map((product: Product, index: number) => (
          <div className="" key={index}>
            <div className={styles.card}>
              <div className={styles.thumbnail}>
                <img src={product.thumbnail} alt={product.name} className="object-fit-cover" />
              </div>
              <div className="flex justify-between py-2 items-center">
                <div className={styles.rate}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <button className="text-red-500 px-1 hover:text-red-600" type="button">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.action}>
                <div className="text-red-500 text-sm">
                  {currencyFormat(product.regularPrice)}
                </div>
                <a className="px-4 py-1 border rounded-full transition duration-500" href={product.url}>
                  <i className="fas fa-cart-plus mr-2"></i>Mua ngay
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
