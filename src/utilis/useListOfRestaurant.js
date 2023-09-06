import { useEffect, useState } from "react";

const useListOfRestaurant = (Api) => {
  const [listOfrestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fecthdata();
  }, []);


  const fecthdata = async () => {
    const data = await fetch(Api);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };
  return listOfrestaurants;
};
export default useListOfRestaurant;
