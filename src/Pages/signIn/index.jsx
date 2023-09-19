import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

function SignIn() {
  const navigate = useNavigate();

  const handleSigin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        toast.success("successfully signed in");
        // navigate("/");
      }
    } catch (error) {
      toast.error("invalid email or password");
    }
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSigin}
        className=" w-96 p-10 rounded shadow-3xl flex flex-col  justify-center gap-4 font-serif"
      >
        <div className="flex flex-col   text-white ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className=" p-2 outline-none rounded text-black"
          />
        </div>
        <div className="flex flex-col  text-white ">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            className="p-2 outline-none rounded text-black"
          />
        </div>
        <button className="bg-purple-500  text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
