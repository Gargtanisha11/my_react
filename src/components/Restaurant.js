import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilis/constant";
const Restaurant = () => {
  const [resItem, setResItem] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
   
  const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResItem(json?.data);
  };
  if (resItem === null) {
    return <Shimmer />;
  }
  const { name, cuisines, areaName, costForTwoMessage } =
    resItem?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="res-item">
      <h1> {name}</h1>
      <h3> {cuisines.join(" , ")} </h3>
      <h3>{areaName}</h3>
      <h3>{costForTwoMessage}</h3>

      <div className="menu-item">
        {itemCards.map((item) => (
          <ul key={item?.card?.info?.id}>
            <li> {item?.card?.info?.name}</li>
            <li> {item?.card?.info?.finalPrice / 100}</li>
            <li> {item?.card?.info?.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
