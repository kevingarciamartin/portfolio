import { useHeader } from "@/context/HeaderContext";
import Link from "next/link";
import styles from "../Header.module.css";

const MobileHeader = () => {
  const { toggleMenu, closeMenu } = useHeader();

  return (
    <ul className={styles.mobileHeader}>
      <li>
        <Link href="/" className={styles.mobileLogo} onClick={closeMenu}>
          Kevin Garcia Martin
        </Link>
      </li>
      <li>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          <div>Menu</div>
          <div>Close</div>
        </button>
      </li>
    </ul>
  );
};

export default MobileHeader;
