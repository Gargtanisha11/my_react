import { useEffect, useState } from "react";

import Restaurant_card from "./Restaurant_card";
import { SWIGGY_API } from "../utilis/constant";
import useListOfRestaurant from "../utilis/useListOfRestaurant";
import useOnlineStatus from "../utilis/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body2 = () => {
  const listOfrestaurants = useListOfRestaurant(SWIGGY_API);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchTex] = useState([]);
  useEffect(() => {
    setFilteredRestaurant(listOfrestaurants);
  }, [listOfrestaurants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1> please check internet connection</h1>;

  if (listOfrestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="Search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchTex(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = listOfrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Restaurant_card resData={restaurant} key={restaurant?.info?.id} />
        ))}
      </div>
    </div>
  );
};
export default Body2;
