import { Toaster } from "react-hot-toast";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Pages/Home/index";

import Login from "./Pages/login/index";
import { useEffect, useState } from "react";

import Loader from "./components/Loader/index";

import "./App.css";
import useAuth from "./Hooks/useAuth";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { user } = useAuth();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }

    return () => clearTimeout(timer);
  }, [user]);

  // useEffect(() => {}, [user]);

  if (loading)
    return (
      <p className="h-screen flex justify-center items-center">
        <Loader />
      </p>
    );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
