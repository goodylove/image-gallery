import { useContext } from "react";
import { AuthContext } from "./../components/context/index";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
