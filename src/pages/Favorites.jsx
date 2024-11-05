import React, { useContext } from "react";
import { Context } from "../context/context";
import Card from "../components/Card";

const Favorites = (props) => {
  const { favsList } = useContext(Context);
  return (
    <div>
      <div className="flex flex-wrap px-2">
        <div className="text-center w-screen text-[20px]">
          {/* {loading ? <div>Loading data, please wait</div> : null} */}
        </div>
        {favsList && favsList.length > 0 ? (
          favsList.map((data, id) => <Card key={id} data={data} />)
        ) : (
          <div className="text-center  w-screen text-[20px]">
            Nothing is added to Favorites
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
