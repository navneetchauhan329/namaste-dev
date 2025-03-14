import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resItem, setResItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    setResItem(json.data);
  };

  return resItem;
};
export default useRestaurantMenu;
