import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurants = () => {
  const [res, setRes] = useState([]);
  const [filres, setFilRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { res, filres, setFilRes };
};
export default useRestaurants;
