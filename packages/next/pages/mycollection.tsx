import Login from "../components/Login";
import { getAddressInCache } from "../utils/address";

// If time allows
const MyCollectionPage: React.FC = () => {
  const myAddress = getAddressInCache();
  console.log("myAddress", myAddress);
  return (
    <div>
      <h2>My Collection</h2>
      {!myAddress && <Login />}
      {myAddress && <p>Your address: {myAddress}</p>}
    </div>
  );
};

export default MyCollectionPage;
