import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } = useContext(Context);

  return (
    <div className="pb-6 flex justify-between">
      <h1 className="text-2xl sm:text-4xl font-bold">
        <NavLink to={"/"}>Fooods</NavLink>
      </h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            className="border rounded-lg p-1 w-[150px] md:w-[300px] h-[40px]"
            placeholder="Enter item"
          />
          <button className="p-1 ml-0 sm:ml-2 bg-green-600 text-white rounded-lg h-[37px]">
            Search
          </button>
        </form>
      </div>

      <ul className="flex  mr-0 sm:mr-10">
        <li className="mr-1 sm:mr-10 text-[20px]">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-[20px]">
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
