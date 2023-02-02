import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
// import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  // if (isLoading) {
  //   return <Loading />;
  // }

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
