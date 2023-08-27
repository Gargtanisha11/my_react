import Restaurant_card from "./Restaurant_card";
import reslist from "../utilis/mockdata";
import { useState } from "react";
const Body = () => {
   // super powerful react state variable 
 
   const [restaurants,setRestaurants]=useState(
     reslist
    );
  
  return (
    <div className="body">
      <div className="Search">
        <input type="text" />
        <button
          className="search_butt"
          onClick={() => {
            const list=restaurants.filter((res) => res.info.avgRating > 4);
            setRestaurants(list);
            
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Restaurant_card resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
