import Image from "next/image";
import styles from "../styles/home.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={150} height={33} />
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
      </header>
    )
}
export default Header