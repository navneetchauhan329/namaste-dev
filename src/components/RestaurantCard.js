import React from "react";
import { RES_IMG } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;

  return (
    <div
      className="m-6 p-4 w-[240px] rounded-lg bg-gray-200 hover:bg-gray-300 
    hover:scale-105 transition-transform duration-50 shadow-md hover:shadow-xxxl hover:cursor-pointer"
    >
      <div className="w-full h-30 rounded-lg overflow-hidden">
        <img
          className="rounded-lg w-full h-full object-cover"
          alt="img-logo"
          src={RES_IMG + resData?.info?.cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-1 text-lg truncate w-full overflow-hidden text-ellipsis ">
        {name}
      </h3>
      <h4 className="line-clamp-1 text-s px-1 text-orange-700">
        {cuisines.join(", ")}
      </h4>
      <div className="flex mt-1">
        <h4 className="text-xs px-1">{avgRating}⭐ ●</h4>
        <h4 className="text-xs px-1">
          ₹ {parseInt(costForTwo.replace(/[^\d]/g, "")) / 2} ●
        </h4>
        <h4 className="text-xs px-1">{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

//HOC for my Restaurant Card

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const discountInfo = props.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative hover:scale-105 transition-transform duration-200">
        {discountInfo && (
          <div className="absolute top-2 left-2 bg-orange-400 text-white px-3 py-1 text-xs rounded-md shadow-lg z-10">
            <p className="font-bold text-[10px]">{discountInfo.header}</p>
            <p className="text-[8px]">{discountInfo.subHeader}</p>
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
