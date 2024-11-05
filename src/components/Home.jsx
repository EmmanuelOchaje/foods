import React, { useContext } from "react";
import { Context } from "../context/context";
import Card from "./Card";

const Home = (props) => {
  const { loading, recipeList } = useContext(Context);
  return (
    <div className="flex flex-wrap px-2">
      <div className="text-center w-screen text-[20px]">
        {loading ? <div>Loading data, please wait</div> : null}
      </div>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((data, id) => <Card key={id} data={data} />)
      ) : (
        <div className="text-center  w-screen text-[20px]">
          Nothing to show, please search something else
        </div>
      )}
    </div>
  );
};

export default Home;
