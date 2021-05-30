import React from "react";
import styles from "./HowItWorks.module.scss";

const STEPS = [
  "Register with your youtube account",
  "Set a deadline to subscribe for the drop",
  "Upload an image for the NFT",
  "Eligible subscribers can claim their NFT",
];
const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>How it works</h2>
      <div className={styles.steps}>
        {STEPS.map((step) => (
          <div className={styles.step}>{step}</div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
