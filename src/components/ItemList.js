import { useDispatch } from "react-redux";
import { RES_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between items-center p-2 m-1 border-gray-400 border-b-2 text-left"
        >
          <div className="flex-1 pr-4">
            <h3 className="font-semibold">{item?.card?.info?.name}</h3>
            <p className="text-sm text-gray-600">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {item?.card?.info?.description}
            </p>
          </div>
          {item?.card?.info?.imageId && (
            <div className="relative">
              <img
                src={RES_IMG + item?.card?.info?.imageId}
                alt="item-img"
                className="w-24 h-24 object-cover rounded-lg shadow-lg"
              />

              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white
                 text-orange-500 px-3 py-1 
                text-xs rounded-full shadow-md w-18 hover:bg-gray-200 font-bold"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
