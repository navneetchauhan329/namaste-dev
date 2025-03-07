import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";

const Body = () => {
  const [res, setRes] = useState(restrautList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          setRes(prev=>prev.filter(x=>x.data.avgRating>4))
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {res.map((restaurantItems) => (
          <RestaurantCard
            resData={restaurantItems}
            key={restaurantItems.data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
