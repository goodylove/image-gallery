import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PageWrapper({ children }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return children;
}

export default PageWrapper;
