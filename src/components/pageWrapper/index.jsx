import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

function PageWrapper({ children }) {
  const [user] = useAuthState(auth);
  if (!user) {
    <Navigate to="/signin" />;
  }

  return children;
}

export default PageWrapper;
