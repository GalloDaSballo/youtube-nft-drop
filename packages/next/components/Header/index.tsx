import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import Login from "../Login";
import styles from "./Header.module.scss";
import { ButtonOutlined } from "../Button";
import { useUser } from "../../context/UserContext";
import { typo } from "../../lib/theme/styled-helpers";
import makeMagic from "../../utils/magic";

const Header: React.FC = () => {
  const user = useUser();
  const router = useRouter();
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
        <ButtonContainer>
          {user ? (
            <FakeButton>
              {String(user.magic.userMetadata.publicAddress).substring(0, 8)}
            </FakeButton>
          ) : (
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          )}
        </ButtonContainer>
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
  @media only screen and (max-width: 700px) {
    justify-content: space-between;
    width: 100vw;
    flex-wrap: wrap;
  }
`;
const Nav = styled.div`
  display: flex;
  padding: 30px 0 0 0;
  justify-self: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 700px) {
    justify-content: space-between;
    width: 100vw;
    flex-wrap: wrap;
  }
`;
const NavLink = styled.div`
  ${typo.buttonText};
  //min-width: 80px;
  margin: 0 40px;
  cursor: pointer;
  flex-wrap: nowrap;
  white-space: nowrap;
  @media only screen and (max-width: 700px) {
    margin: 0 20px;
  }
`;
const LoginButton = styled(ButtonOutlined)`
  margin: 0 20px;
`;
const FakeButton = styled(LoginButton)`
  cursor: unset;
  @media only screen and (max-width: 700px) {
    > .label {
      max-width: 20px;
      text-overflow: ellipsis;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 495px) {
    position: absolute;
    right: 5px;
    top: 0;
    margin: 32px 20px;
  }
`;
