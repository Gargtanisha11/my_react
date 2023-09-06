
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utilis/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);

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
