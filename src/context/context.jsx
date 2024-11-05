import { createContext, useState } from "react";

export const Context = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favsList, setFavsList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data.recipes) {
        setRecipeList(data?.data.recipes);
        setLoading(false);
        setSearchParam("");
      }

      /* if (!res.ok) {
        if (res.status === 429) {
          console.warn("Too many requests. Please try again later.");
          return;
        }
        throw new Error("Failed to fetch recipes");
      } */
    } catch (e) {
      console.log(e);
    }
  }

  function handleAddToFavs(currItem) {
    console.log(currItem);
    const cpyFavs = [...favsList];
    const index = cpyFavs.findIndex((item) => item.id === currItem.id);
    if (index === -1) {
      cpyFavs.push(currItem);
    } else {
      cpyFavs.splice(index);
    }

    setFavsList(cpyFavs);
  }

  return (
    <Context.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavs,
        favsList,
      }}
    >
      {children}
    </Context.Provider>
  );
}
