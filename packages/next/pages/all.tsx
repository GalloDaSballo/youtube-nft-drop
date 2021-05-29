import useSWR from "swr";
import { API_URL } from "../utils/constants";

const fetcher = (url) => fetch(url).then((res) => res.json());
// If time allows
const AllDropsPage: React.FC = () => {
  const { data, error } = useSWR(`${API_URL}/drops`, fetcher);
  return (
    <div>
      <h2>All Drops</h2>
      {data.map((drop) => (
        <div>
          <p>{drop.id}</p>
          <p>{drop.imageURL}</p>
        </div>
      ))}
    </div>
  );
};

export default AllDropsPage;
