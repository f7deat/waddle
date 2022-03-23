import Image from "next/image";
import styles from "../styles/home.module.css";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-2 shadow">
      <div className="flex gap-2 items-center text-gray-800 px-2">
        <i className="fas fa-shield-alt text-2xl"></i>
        <div className="font-bold text-xl">DefZone<span className="text-primary">.Net</span></div>
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
