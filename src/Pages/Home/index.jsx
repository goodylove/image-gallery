import { useContext } from "react";
import NavBar from "../../components/NavBar";

function Home() {
  return (
    <div className="text-white font-serif">
      <NavBar />
      <div className="flex justify-center mt-5">
        <input
          type="search"
          placeholder="search"
          className="p-2 rounded-l outline-none"
        />
        <button className="text-white bg-purple-500 p-1 rounded-r">
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
