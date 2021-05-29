import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import getChannelData from "../utils/getChannelData";
import { useUser } from "../context/UserContext";
import Login from "../components/Login";

const NewDropPage: React.FC = () => {
  const user = useUser();
  const [channel, setChannel] = useState("");
  const [channelThumb, setChannelThumb] = useState("");
  const [channelName, setChannelName] = useState("");
  const [subs, setSubs] = useState("");
  const [loading, setLoading] = useState(false); // May want to show loading modal if time allows

  const [newEntry, setNewEntry] = useState<null | any>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      // TODO: Upload Files

      const res = await axios({
        method: "post",
        url: `${API_URL}/drops`,
        data: {
          channelId: channel,
          channelThumb,
          channelName,
          imageURI:
            "https://lh3.googleusercontent.com/SQKRv6-GD_DUzYl5p9Mv4p99o95IhamRVs04p0goE720pvUr-AVEo3HV9CnJdf9QE1nqAeLuMmZI6I_yd5hQiWiXZNPLbi-VvOrv=w600",
          endDate: new Date(),
        },
      });
      setNewEntry(res.data[0]);
    } catch (err) {
      alert(`Something went wrong ${err}`);
    }
    // TODO: Send to server
    setLoading(false);
  };

  useEffect(() => {
    const getUserChannelData = async () => {
      if (user?.oauth?.accessToken) {
        const data = await getChannelData(user.oauth.accessToken);
        setChannelThumb(data.snippet.thumbnails.default.url);
        setChannelName(data.snippet.title);
        setChannel(data.id);
      }
    };
    getUserChannelData();
  }, [user]);

  if (newEntry) {
    return (
      <div>
        <h2>Your Drop is ready!</h2>
        <p>
          Share this link with your subscribers and fans to gift them an NFT!
        </p>
        <p>
          {window.location.host}/redeem/{newEntry.id}
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <h2>Login to youtube to create your drop</h2>
        <Login />{" "}
      </div>
    );
  }

  return (
    <div>
      <h2>Create your Drop</h2>
      {loading && <p>Loading</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="channel">
            <img src={channelThumb} alt="Your thumb" />
            <input
              disabled
              value={channelName}
              onChange={(e) => setChannel(e.target.value)}
            />

            <input
              disabled
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subs">
            Last subscribed day (Any sub before this day is eligible to mint)
            <input
              value={subs}
              onChange={(e) => setSubs(e.target.value)}
              type="date"
            />
          </label>
        </div>
        <div>
          <label htmlFor="img">
            Upload an image
            <input type="file" />
          </label>
        </div>
        <button disabled={loading} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDropPage;
