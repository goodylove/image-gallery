import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import { auth } from "./firebase";
import Home from "./Pages/Home/index";

import "./App.css";
import SignIn from "./Pages/signIn/index";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/signin" element={<SignIn />} />}
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
