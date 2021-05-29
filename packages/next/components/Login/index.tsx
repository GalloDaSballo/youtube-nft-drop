import { useUser } from "../../context/UserContext";
import makeMagic from "../../utils/magic";

const Login: React.FC = () => {
  const user = useUser();
  console.log("user", user);
  const handleLogin = async () => {
    const magic = makeMagic();
    await magic.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: window.location.href,
      scope: [
        "https://www.googleapis.com/auth/youtube.readonly",
      ] /* optional */,
    });
  };
  if (user) {
    return (
      <div>
        Logged in as: {user?.oauth?.userInfo?.name}{" "}
        {user.magic?.userMetadata?.publicAddress}
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
