import Login from "../components/Login";
import NFT from "../components/NFT";
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

      <NFT image="https://lh3.googleusercontent.com/SQKRv6-GD_DUzYl5p9Mv4p99o95IhamRVs04p0goE720pvUr-AVEo3HV9CnJdf9QE1nqAeLuMmZI6I_yd5hQiWiXZNPLbi-VvOrv=w600" />
    </div>
  );
};

export default MyCollectionPage;
