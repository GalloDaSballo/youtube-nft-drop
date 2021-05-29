import { FormEvent, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const NewDropPage: React.FC = () => {
  const [channel, setChannel] = useState("");
  const [subs, setSubs] = useState(new Date());
  const [loading, setLoading] = useState(false); // May want to show loading modal if time allows

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Upload Files

    await axios({
      method: "post",
      url: `${API_URL}/drops`,
      data: {
        channelId: channel,
        imageURI:
          "https://lh3.googleusercontent.com/SQKRv6-GD_DUzYl5p9Mv4p99o95IhamRVs04p0goE720pvUr-AVEo3HV9CnJdf9QE1nqAeLuMmZI6I_yd5hQiWiXZNPLbi-VvOrv=w600",
        endDate: new Date(),
      },
    });
    // TODO: Send to server
    setLoading(false);
  };
  return (
    <div>
      <h2>Create your Drop</h2>
      {loading && <p>Loading</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="channel">
            Your Channel Id
            <input
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subs">
            Last day to subscribe
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewDropPage;
