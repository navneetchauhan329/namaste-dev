import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  return (
    <div className="m-3 p-2 bg-gray-200 shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold pr-4">↓</span>
      </div>
      <div className="mt-0.5">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
