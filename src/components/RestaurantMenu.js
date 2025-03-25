import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resItem === null) return <Shimmer />;
  const { cuisines, avgRating, costForTwo } =
    resItem?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto my-6 p-6 bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        {resItem?.cards[0]?.card?.card?.text}
      </h1>
      <p className="text-gray-600 mt-2 text-center">{`${cuisines.join(
        ", "
      )}    •    ${avgRating} ⭐    •    ₹ ${costForTwo / 100}`}</p>

      <h2 className="mt-6 text-xl font-semibold text-gray-700 border-b pb-2">
        Menu
      </h2>

      {categories.map((cat, index) => (
        <RestaurantCategory
          data={cat?.card?.card}
          key={cat?.card?.card?.categoryId}
          showItems={index === showIndex && true}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
