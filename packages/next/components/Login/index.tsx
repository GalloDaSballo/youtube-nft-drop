import { useEffect } from "react";
import magic from "../../utils/magic";

const Login: React.FC = () => 
{
  useEffect(() => {
    const fromLogin = async () => {
      try {
      const result = await magic.oauth.getRedirectResult();
      console.log("result", result)
      } catch(err) {
        console.log("Exception in  getRedirectResult err", err)
      }
    }

    fromLogin()

  }, [])
  const handleLogin = async () => {
    await magic.oauth.loginWithRedirect({
      provider: 'google',
      redirectURI: window.location.href,
      scope: ['https://www.googleapis.com/auth/youtube.readonly'], /* optional */
    });
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login