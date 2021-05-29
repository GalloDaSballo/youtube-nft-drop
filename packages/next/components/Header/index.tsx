import Link from "next/link";
import Login from "../Login";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <img src="/images/logo.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Header;
