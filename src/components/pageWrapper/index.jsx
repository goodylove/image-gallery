import { auth } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function PageWrapper({ user, children }) {
  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export function LoginWrapper({ user, children }) {
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PageWrapper;
