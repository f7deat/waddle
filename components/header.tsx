import styles from "../styles/home.module.css";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 border-b">
      <div className="flex gap-2 items-center px-2">
        <i className="fas fa-cart-arrow-down text-2xl text-red-500"></i>
        <div className="font-bold text-3xl">DefZone<span className="text-red-500">.Net</span></div>
      </div>
      <div className={styles.menu}>
        <ul>
          <li className={styles.active}>Cửa hàng</li>
          <li>Liên hệ</li>
          <li>Workshops</li>
          <li>
            <a href="https://defzone.net">Blogs</a>
          </li>
        </ul>
        <div className=""></div>
      </div>
      <button className="h-10 w-10 border border-gray-200 flex items-center justify-center rounded hover:bg-gray-100 block md:hidden">
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
};
export default Header;
