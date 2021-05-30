import Head from "next/head";
import Link from "next/link";
import React from "react";
import ForSubs from "../components/ForSubs";
import HowItWorks from "../components/HowItWorks";
import styles from "../styles/Home.module.scss";
import { ButtonThird } from "../components/Button";
import Feed from "../components/Feed";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.masthead}>
          <div>
            <h1>Get more subscribers</h1>
            <h2>by rewarding those who get in early</h2>
            <Link href="/new">
              <ButtonThird>Create Drop</ButtonThird>
            </Link>
          </div>
          <div>
            <img src="/images/home.png" alt="Welcome to YouTube NFT Drop!" />
          </div>
        </div>
        <HowItWorks />
        <ForSubs />

        <Feed />
      </main>
    </div>
  );
};

export default Home;
