import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="border m-1 rounded-lg w-[]" key={data.id}>
      <div>
        <img
          src={data.image_url}
          className="sm:w-[300px] w-[150px] rounded-lg m-1 sm:h-[200px]"
          alt=""
        />
        <p className="w-[300px] px-4">
          <span className="font-medium">Description:</span> {data.title}
        </p>
        <p className="text-center font-medium py-2">{data.publisher}</p>
        <div className="flex justify-center">
          <button className="bg-green-600 mx-4 rounded-lg text-white p-1 my-2">
            <Link to={`/recipe-item/${data?.id}`}>Recipe Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
