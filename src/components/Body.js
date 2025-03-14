import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const { res, filres, setFilRes } = useRestaurants();
  const [text, setText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <p>Hey there! Looks like you are offline</p>;
  }

  return (
    <div className="body">
      {res.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="search-btn"
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
            <button
              className="filter-btn"
              onClick={() => {
                setFilRes((prev) => prev.filter((x) => x.info.avgRating > 4.5));
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="filter-btn"
              onClick={() => {
                setFilRes(res);
              }}
            >
              Reset
            </button>
          </div>
          <div className="res-container">
            {filres.map((restaurantItems, index) => (
              <Link
                key={restaurantItems.info.id}
                to={"/restaurants/" + restaurantItems.info.id}
              >
                <RestaurantCard resData={restaurantItems} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
