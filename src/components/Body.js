import React, { useState } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const { res, filres, setFilRes } = useRestaurants();
  const [text, setText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);

  if (onlineStatus === false) {
    return <p>Hey there! Looks like you are offline</p>;
  }

  return (
    <div className="body">
      {res.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="flex m-8 ">
            <div className="m-2 p-2 ">
              <input
                className="border-solid-black border-2 rounded-lg"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-0.5 mx-3.5 bg-orange-500 rounded-lg text-white"
                onClick={() => {
                  setFilRes((prev) =>
                    prev.filter((x) =>
                      x.info.name.toLowerCase().includes(text.toLowerCase())
                    )
                  );
                }}
              >
                Search
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="bg-gray-300 px-2 py-0.5 mx-2 rounded-lg"
                onClick={() => {
                  setFilRes((prev) =>
                    prev.filter((x) => x.info.avgRating > 4.5)
                  );
                }}
              >
                Top Rated Restaurants
              </button>
              <button
                className="bg-gray-300 px-2 py-0.5 mx-2 rounded-lg"
                onClick={() => {
                  setFilRes(res);
                }}
              >
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 justify-center">
            {filres.map((restaurantItems, index) => (
              <Link
                key={restaurantItems.info.id}
                to={"/restaurants/" + restaurantItems.info.id}
                className="cursor-default"
              >
                {restaurantItems?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardDiscounted resData={restaurantItems} />
                ) : (
                  <RestaurantCard resData={restaurantItems} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
