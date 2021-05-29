import useSWR from "swr";
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
        <div>
          <p>{drop.id}</p>
          <p>Channel: {drop.channelId}</p>
          <p>Ends at: {drop.endDate}</p>
          <img src={drop.imageURI} alt="Image for drop" />
        </div>
      ))}
    </div>
  );
};

export default AllDropsPage;
