import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { storeAddressInCache } from "../utils/address";
import makeMagic from "../utils/magic";

let m: any; // Magic requires window to function

interface User {
  oauth: {
    accessToken: string;
    userInfo: {
      name: string;
      email: string;
    };
  };
  magic: {
    userMetadata: {
      publicAddress: string;
    };
  };
}

type UserContextData = {
  user: {
    oauth: {
      accessToken: string;
      userInfo: {
        name: string;
        email: string;
      };
    };
    magic: {
      userMetadata: {
        publicAddress: string;
      };
    };
  } | null;
  logout: () => void;
};

const UserContext = createContext<UserContextData>({
  user: null,
  logout: () => null,
});
export default UserContext;

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  /**
   * Logs the user out of magic
   */
  const logout = useCallback(async () => {
    try {
      await m.user.logout();
      setUser(null);
    } catch (err) {
      // Do nothing
      setUser(user);
    }
  }, [user]);

  useEffect(() => {
    m = makeMagic();

    const fromLogin = async () => {
      try {
        const result: User = await m.oauth.getRedirectResult();
        storeAddressInCache(result?.magic?.userMetadata?.publicAddress);
        console.log("result", result);
        setUser(result);
      } catch (err) {
        console.log("Exception in  getRedirectResult err", err);
      }
    };

    fromLogin();
  }, [logout]);

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useLogout = () => {
  const { logout } = useContext(UserContext);

  return logout;
};

export const useUser = () => {
  const { user } = useContext(UserContext);

  return user;
};
