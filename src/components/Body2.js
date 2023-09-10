import { useEffect, useState } from "react";

import Restaurant_card, { withPromoted } from "./Restaurant_card";
import { SWIGGY_API } from "../utilis/constant";
import useListOfRestaurant from "../utilis/useListOfRestaurant";
import useOnlineStatus from "../utilis/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body2 = () => {
  const listOfrestaurants = useListOfRestaurant(SWIGGY_API);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchTex] = useState([]);

  const RestaurantPromotedCard= withPromoted(Restaurant_card);
  useEffect(() => {
    setFilteredRestaurant(listOfrestaurants);
  }, [listOfrestaurants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1> please check internet connection</h1>;

  if (listOfrestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body  mx-4">
      <div className="Search">
        <input
          type="text"
          className="search-box my-4 px-1 border border-solid border-stone-700 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchTex(e.target.value);
          }}
        />
        <button className="search-button mx-4 px-2 bg-slate-400 rounded-lg  text-white  h-8"
          onClick={() => {
            const filteredList = listOfrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
         🔍
        </button>
        <button
          className="filter-btn mx-4 bg-emerald-700 rounded-lg text-white w-56 h-8"
          onClick={() => {
            const list = listOfrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(list);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
           restaurant.info.avgRating >= 4.2
            ? (<RestaurantPromotedCard resData={restaurant} key={restaurant?.info?.id}/>) 
          :  (<Restaurant_card resData={restaurant} key={restaurant?.info?.id} />)
                       
                       ))
          }
      </div>
    </div>
  );
};
export default Body2;
