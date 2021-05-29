import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { FormEvent, useState } from "react";
import Login from "../../components/Login";
import { useUser } from "../../context/UserContext";
import { API_URL } from "../../utils/constants";

const RedeemSingleTokenPage: React.FC = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string | null>(null);
  const user = useUser();
  const { dropId } = router.query;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await axios({
      method: "post",
      url: `${API_URL}/claim`,
      data: {
        drop: dropId,
        address: address || user.magic.userMetadata.publicAddress,
        accessToken: user.oauth.accessToken,
      },
    });
    console.log("res", res);
  };

  return (
    <div>
      <h2>Redeem your Drop {dropId} by TODO</h2>
      {!user && (
        <div>
          <h3>Step 1: Login with Youtube</h3>
          <Login />
        </div>
      )}
      {user && (
        <>
          <h3>Step 2: Claim your NFT!</h3>
          <label>
            Specify a destination address (optional)
            <input
              type="string"
              value={address}
              onChange={() => setAddress(address)}
            />
          </label>
          <form onSubmit={handleSubmit}>
            <button type="submit">Verify my Subscription</button>
          </form>
        </>
      )}
    </div>
  );
};

export default RedeemSingleTokenPage;
