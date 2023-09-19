import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";

import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ value, handleSearch }) {
  const navigate = useNavigate();
  const [toggleSearchContainer, setToggleSearchContainer] = useState(false);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Success");
      navigate("/login");
    });
  };

  return (
    <nav className="flex justify-between bg-white text-black p-3 mb-44 items-center fixed top-0 w-full">
      <h2 className=" font-serif font-[700]">Image Gallery</h2>

      {toggleSearchContainer && (
        <div className="flex justify-center absolute top-20 right-9  search">
          <input
            type="search"
            value={value}
            onChange={(e) => handleSearch(e)}
            placeholder="search"
            className="p-1 rounded outline-none text-black border-2"
          />
          <button className="bg-black text-white p-2 rounded-r">
            <AiOutlineSearch />
          </button>
        </div>
      )}
      <div className="flex justify-center gap-3 items-center cursor-pointer">
        <AiOutlineSearch
          onClick={() => setToggleSearchContainer((prev) => !prev)}
        />
        <button
          className="bg-purple-500 p-2 text-white rounded "
          onClick={handleLogOut}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
