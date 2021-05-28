import { useRouter } from "next/dist/client/router";
import { FormEvent } from "react";

const RedeemSingleTokenPage: React.FC = () => {
  const router = useRouter();
  const { dropId } = router.query;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Redeem your Drop {dropId} by TODO</h2>
      <p>First TODO subs get an NFT!</p>
      <form onSubmit={handleSubmit}>
        <button>Verify my Subscription</button>
      </form>
    </div>
  );
};

export default RedeemSingleTokenPage;
