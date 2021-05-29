import styles from "./NFT.module.scss";

const NFT: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="NFT" />
    </div>
  );
};
export default NFT;
