import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { FormEvent, useEffect, useState } from "react";
import Login from "../../components/Login";
import { useUser } from "../../context/UserContext";
import { Drop } from "../../types";
import { API_URL } from "../../utils/constants";

const useDrop = (dropId: string): Drop | null => {
  const [drop, setDrop] = useState<Drop | null>(null);
  useEffect(() => {
    const fetchDrop = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${API_URL}/drops/${dropId}`,
        });
        setDrop(res.data[0]);
      } catch (err) {}
    };

    fetchDrop();
  }, [dropId]);

  return drop;
};

const RedeemSingleTokenPage: React.FC = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string | null>(null);
  const user = useUser();
  const { dropId } = router.query;

  const dropData = useDrop(dropId);

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
      {dropData && (
        <>
          <h2>
            Redeem your Drop by {dropData?.channelName}{" "}
            <img src={dropData?.channelThumb} />
          </h2>
          <p>Login with youtube and redeem the following NFT</p>
          {dropData && <img src={dropData.imageURI} alt="NFT" />}
        </>
      )}

      {!user && (
        <div>
          <h3>Step 1: Login into your Youtube Account</h3>
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
