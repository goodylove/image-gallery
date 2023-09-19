import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { auth } from "./firebase";
import Home from "./Pages/Home/index";
import PageWrapper from "./components/pageWrapper";

import "./App.css";
import SignIn from "./Pages/login/index";
import Login from "./Pages/login/index";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./components/Loader/index";

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log(user);
  if (loading)
    return (
      <p className="h-screen flex justify-center items-center">
        <Loader />
      </p>
    );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
