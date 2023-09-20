import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

function Login() {
  const { handleSigin, user } = useAuth();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(user);

  const login = async (e) => {
    e.preventDefault();

    await handleSigin(email, password);

    if (user) {
      setEamil("");
      setPassword("");
      navigate("/");
      toast.success("successfully signed in");
    }
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <form
        action=""
        onSubmit={login}
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

        <button className="bg-purple-500  text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
