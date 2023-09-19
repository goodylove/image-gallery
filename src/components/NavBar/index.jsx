import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "../../firebase";

function NavBar() {
  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Success");
    });
  };

  return (
    <nav className="flex justify-between bg-white text-black p-5 items-center">
      <h2 className=" font-serif font-[700]">Image Gallery</h2>
      <button
        className="bg-purple-500 p-2 text-white rounded "
        onClick={handleLogOut}
      >
        Sign Out
      </button>
    </nav>
  );
}

export default NavBar;
