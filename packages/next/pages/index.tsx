import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Yotube NFT Drop</h1>
        <h2>Get more subscribers, by rewarding those who get in early</h2>
        <button>Sign up with Metamask</button>

        <h3>How it works</h3>
        <p>
          Register with your youtube account Specify how many subscribers to
          rewards Upload an image or video for the NFT Any valid subscriber will
          be eligible to receive the NFT
        </p>

        <h3>For Subscribers</h3>
        <p>
          Show how early you were supporting your favourite creators by
          collecting badges
        </p>

        <button>View My Badges</button>
      </main>
    </div>
  );
};

export default Home;
