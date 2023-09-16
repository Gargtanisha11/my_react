import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utilis/hooks/useRestaurantMenu";

import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null);
  
  if (resItem === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resItem?.cards[0]?.card?.card?.info;

  const category =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (items) =>
        items?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || items?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    const funct= ()=>{
      setShowIndex(null);
    }
  // console.log(category);
  return (
    <div className="text-center  py-3 mx-60">
      <div className="header ">
        <h1 className="text-xl font-bold"> {name}</h1>
        <h3 className="text-lg font-semibold">
          {" "}
          {cuisines.join(" , ")} - {costForTwoMessage}
        </h3>
      </div>
      <div>
        {category.map((itemCards,index) =>(
          <RestaurantMenuCategory key={itemCards.card.card.title} itemscategory={itemCards} 
          showItem={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
          funct={funct}
          />
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
