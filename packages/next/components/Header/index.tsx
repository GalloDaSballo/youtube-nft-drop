import Link from "next/link";
import styled from "styled-components";
import Login from "../Login";
import styles from "./Header.module.scss";
import { ButtonOutlined } from "../Button";
import { useUser } from "../../context/UserContext";
import { typo } from "../../lib/theme/styled-helpers";
import makeMagic from "../../utils/magic";

const Header: React.FC = () => {
  const user = useUser();
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
  return (
    <HeaderRow>
      <Link href="/">
        <a>
          <img src="/images/logo.png" alt="logo" />
        </a>
      </Link>
      <Nav>
        <Link href="/all">
          <NavLink>All Drops</NavLink>
        </Link>

        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        {user && (
          <Link href="/mycollection">
            <NavLink>My Collection</NavLink>
          </Link>
        )}
        {user ? (
          <FakeButton>
            {String(user.magic.userMetadata.publicAddress).substring(0, 8)}
          </FakeButton>
        ) : (
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        )}
      </Nav>
    </HeaderRow>
  );
};

export default Header;

const HeaderRow = styled.div`
  padding: 36px 28px;
  background-color: #fc2e34;
  display: flex;
  justify-content: space-between;

  a img {
    max-width: 103px;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: center;
`;
const NavLink = styled.div`
  ${typo.buttonText};
  margin: 0 16px;
  cursor: pointer;
`;
const LoginButton = styled(ButtonOutlined)`
  margin: 0 20px;
`;
const FakeButton = styled(LoginButton)`
  cursor: unset;
`;
