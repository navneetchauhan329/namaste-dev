import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filres, setFilRes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
