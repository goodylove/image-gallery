import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { auth } from "./firebase";
import Home from "./Pages/Home/index";
import PageWrapper from "./components/pageWrapper";

import "./App.css";
import Login from "./Pages/login/index";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./components/Loader/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginWrapper } from "./components/pageWrapper/index";

function App() {
  const [loading, setLoading] = useState(true);

  const [user] = useAuthState(auth);
  console.log(user);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <p className="h-screen flex justify-center items-center">
        <Loader />
      </p>
    );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper user={user}>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <LoginWrapper user={user}>
              <Login />
            </LoginWrapper>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
