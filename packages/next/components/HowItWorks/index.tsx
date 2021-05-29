const STEPS = [
  "Register with your youtube account",
  "Specify how many subscribers to reward",
  "Upload an image or video for the NFT",
  "All subscribers will be eligible to receive the NFT",
];
const HowItWorks: React.FC = () => {
  return (
    <div>
      {STEPS.map((step) => (
        <div>{step}</div>
      ))}
    </div>
  );
};

export default HowItWorks;
