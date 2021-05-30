import styles from "./HowItWorks.module.scss";

const STEPS = [
  "Register with your youtube account",
  "Set a deadline for the drop",
  "Upload an image or video for the NFT",
  "All subscribers will be eligible to receive the NFT",
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
