import { useState } from "react";
import styles from "../styles/product-list.module.css";
import { Product } from "../types/product";

interface IProductListProps {
  products: Product[];
  product: any;
  setProduct: any;
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
      <div className="grid grid-cols-3 gap-4 mb-4 border-b pb-4">
        {props.products?.map((product: Product, index: number) => (
          <div className="" key={index}>
            <div className={styles.card}>
              <div className="cursor-pointer bg-gray-900" onClick={() => props.setProduct(product)}>
                <img src={product.thumbnail} alt={product.name} className="object-fit-cover transition duration-500 hover:opacity-75" />
              </div>
              <div className="flex justify-between py-1 items-center">
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
              <div className="font-bold hover:text-red-500 flex-1 cursor-pointer" onClick={() => props.setProduct(product)}>{product.name}</div>
              <div className={styles.action}>
                <div className="text-red-500 text-sm">
                  {currencyFormat(product.regularPrice)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 border rounded-full"><i className="fas fa-angle-left mr-1"></i>Trang trước</button>
        <button className="px-4 py-2 border rounded-full">Trang sau<i className="fas fa-angle-right ml-1"></i></button>
      </div>
    </div>
  );
};
