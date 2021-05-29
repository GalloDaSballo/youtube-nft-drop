import Link from "next/link";

const ForSubs: React.FC = () => {
  return (
    <div>
      <h2>For Subscribers</h2>
      <img src="/images/subs.svg" alt="For Subscribers" />
      <p>
        Show how early you were supporting your favorite creators by collecting
        badges
      </p>
      <Link href="/mycollection">
        <a>View your Collection</a>
      </Link>
    </div>
  );
};
export default ForSubs;
