import React from "react";
import { RES_IMG } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;

  return (
    <div
      className="m-3 p-3 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-300 
    hover:scale-105 transition-transform duration-100 shadow-md hover:shadow-xxl hover:cursor-pointer "
    >
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover"
          alt="img-logo"
          src={RES_IMG + resData?.info?.cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-3 text-lg truncate w-full overflow-hidden text-ellipsis ">
        {name}
      </h3>
      <h4 className="line-clamp-1 text-s px-1 text-orange-700">
        {cuisines.join(", ")}
      </h4>
      <div className="flex mt-2">
        <h4 className="text-xs px-1">{avgRating}🌟 ●</h4>
        <h4 className="text-xs px-1">
          {parseInt(costForTwo.replace(/[^\d]/g, "")) / 2} ₹ ●
        </h4>
        <h4 className="text-xs px-1">{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
