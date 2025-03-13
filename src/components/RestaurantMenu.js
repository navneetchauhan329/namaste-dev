import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resItem, setResItem] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    setResItem(json.data);
  };

  if (resItem === null) return <Shimmer />;
  const { cuisines, avgRating, costForTwo } =
    resItem?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resItem?.cards[0]?.card?.card?.text}</h1>
      <p>{`${cuisines.join(", ")}    •    ${avgRating} ⭐    •   Rs ${
        costForTwo / 100
      }`}</p>
      <ul>
        {itemCards?.map((x) => {
          return (
            <li key={x?.card?.info?.id}>
              {x?.card?.info?.name} ----Rs{x?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
