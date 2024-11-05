import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/context";

const DetailsPage = (props) => {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavs } =
    useContext(Context);

  useEffect(() => {
    async function resData() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        if (data?.data) {
          setRecipeDetailsData(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch recipe data:", error);
      }
    }
    resData();
  }, [id, recipeDetailsData]);

  if (!recipeDetailsData || !recipeDetailsData.recipe) {
    return <div>Loading...</div>;
  }
  console.log(recipeDetailsData);
  return (
    <div className="flex justify-center">
      <div className="">
        <img
          src={recipeDetailsData.recipe.image_url}
          className="rounded-xl w-[350px] h-[250px]"
          alt="/"
        />
      </div>
      <div className="m-4">
        <p className="text-2xl">
          <span className="font-medium">Cooking time:</span>
          {recipeDetailsData.recipe.cooking_time} ,
        </p>
        <p className="text-2xl">
          <span className="font-medium">Publisher:</span>
          {recipeDetailsData.recipe.publisher} ,
        </p>
        <p className="text-2xl">
          <span className="font-medium">Servings:</span>
          {recipeDetailsData.recipe.servings} .
        </p>
        <button
          onClick={() => handleAddToFavs(recipeDetailsData?.recipe)}
          className="bg-green-600 p-1 text-white rounded-lg my-4"
        >
          Save to favorites
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
