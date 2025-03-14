import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);

  if (resItem === null) return <Shimmer />;
  const { cuisines, avgRating, costForTwo } =
    resItem?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
