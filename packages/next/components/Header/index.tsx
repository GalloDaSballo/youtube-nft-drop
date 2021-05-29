import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default Header;
