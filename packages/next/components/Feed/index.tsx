import useDrops from "../../hooks/useDrops";
import { DropFromGraph } from "../../types";
import { getLink } from "../../utils/text";
import NFT from "../NFT";
import styles from "./Feed.module.scss";

const Feed: React.FC = () => {
  const drops = useDrops();
  return (
    <div className={styles.container}>
      <h2>Top Drops Claimed!</h2>
      <div className={styles.gridContainer}>
        {drops.map((drop: DropFromGraph) => (
          <>
            {drop.tokenURI && (
              <div>
                <NFT image={getLink(drop.tokenURI)} />
                <h3>Claimed: {drop.claims.length} times</h3>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Feed;
