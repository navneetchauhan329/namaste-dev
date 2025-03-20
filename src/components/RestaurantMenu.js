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
    <div className="max-w-3xl mx-auto my-6 p-6 bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">
        {resItem?.cards[0]?.card?.card?.text}
      </h1>
      <p className="text-gray-600 mt-2">{`${cuisines.join(
        ", "
      )}    •    ${avgRating} ⭐    •   Rs ${costForTwo / 100}`}</p>

      <h2 className="mt-6 text-xl font-semibold text-gray-700 border-b pb-2">
        Menu
      </h2>
      <ul className="mt-4 space-y-4">
        {itemCards?.map((x) => {
          return (
            <li
              className="flex justify-between p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-300 transition-all"
              key={x?.card?.info?.id}
            >
              <span className="font-medium text-gray-800 text-sm">
                {x?.card?.info?.name}
              </span>
              <span className="font-semibold text-gray-700 text-xs">
                Rs {x?.card?.info?.price / 100}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
