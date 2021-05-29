import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Youtube NFT Drop</h1>
        <h2>Get more subscribers, by rewarding those who get in early</h2>

        <h3>How it works</h3>
        <p>
          Register with your youtube account Specify how many subscribers to
          rewards Upload an image or video for the NFT Any valid subscriber will
          be eligible to receive the NFT
          <Link href="/new">
            <a>Create new Drop</a>
          </Link>
        </p>

        <h3>For Subscribers</h3>
        <p>
          Show how early you were supporting your favourite creators by
          collecting badges
          <Link href="/mycollection">
            <a>View your Collection</a>
          </Link>
        </p>

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
