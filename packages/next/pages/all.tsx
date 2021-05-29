import Link from "next/link";
import useSWR from "swr";
import NFT from "../components/NFT";
import { Drop } from "../types";
import { API_URL } from "../utils/constants";

const fetcher = (url) => fetch(url).then((res) => res.json());
// If time allows
const AllDropsPage: React.FC = () => {
  const { data, error } = useSWR(`${API_URL}/drops`, fetcher);
  return (
    <div>
      <h2>All Drops</h2>

      {data?.map((drop: Drop) => (
        <Link href={`/redeem/${drop.id}`}>
          <a>
            <div>
              <NFT image={drop.imageURI} />
              <p>Drop by: {drop.channelName}</p>
              <p>Ends at: {drop.endDate}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllDropsPage;
