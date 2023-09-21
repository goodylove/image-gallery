import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

function Signup() {
  const { handleSignUp, user } = useAuth();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      toast.error("Please enter a valid email address");
      return;
    }

    await handleSignUp(email, password);

    setEamil("");
    setPassword("");
    navigate("/");
    toast.success("successfully signed in");
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <form
        action=""
        onSubmit={signup}
        className=" w-96 p-10 rounded shadow-3xl flex flex-col  justify-center gap-4 font-serif"
      >
        <div className="flex flex-col   text-white ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEamil(e.target.value)}
            className=" p-2 outline-none rounded text-black"
          />
        </div>

        <div className="flex flex-col  text-white ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 outline-none rounded text-black"
          />
        </div>

        <button className="bg-purple-500  text-white p-2 rounded">
          Sign UP
        </button>
        <span className="mt-3 text-white font-poppins text-center">
          <Link to="/login" className="underline">
            already have an acount ? Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
