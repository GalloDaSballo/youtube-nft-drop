import Head from "next/head";
import Link from "next/link";
import ForSubs from "../components/ForSubs";
import HowItWorks from "../components/HowItWorks";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.masthead}>
          <div>
            <h1>Get more subscribers</h1>
            <h2>By rewarding those who get in early</h2>
            <Link href="/new">
              <a>Create new Drop</a>
            </Link>
          </div>
          <div>
            <img src="/images/home.png" alt="Welcome to youtube nft drop!" />
          </div>
        </div>
        <HowItWorks />
        <ForSubs />

        <h3>All Drops</h3>
        <Link href="/all">
          <a>
            <p>View all drops here!</p>
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
