import { FormEvent, useState } from "react";

const NewDropPage: React.FC = () => {
  const [channel, setChannel] = useState("");
  const [subs, setSubs] = useState(1000);
  const [loading, setLoading] = useState(false); // May want to show loading modal if time allows

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Upload Files

    // TODO: Send to server
    setLoading(false);
  };
  return (
    <div>
      <h2>Create your Drop</h2>
      {loading && <p>Loading</p>}
      <form onSubmit={handleSubmit}>
        <input value={channel} onChange={(e) => setChannel(e.target.value)} />
        <input
          value={subs}
          onChange={(e) => setSubs(parseInt(e.target.value, 10))}
          type="number"
        />
        <input type="file" />
      </form>
    </div>
  );
};

export default NewDropPage;
