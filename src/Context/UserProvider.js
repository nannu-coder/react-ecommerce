import { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }

    // eslint-disable-next-line
  }, [isAuthenticated, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        loginWithRedirect,
        isAuthenticated,
        logout,
        isLoading,
        myUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
