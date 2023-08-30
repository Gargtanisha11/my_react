import Restaurant_card from "./Restaurant_card";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // super powerful react state variable

  const [listOfrestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchTex] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchTex(e.target.value);
            const filteredList = listOfrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        />
        <button
          onClick={() => {
            console.log("button clicked");

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
          <Restaurant_card resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
