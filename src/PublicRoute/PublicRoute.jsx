
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/my-profile" replace />;
  }

  return children; 
};

export default PublicRoute;
