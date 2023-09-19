import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Restaurant_card, { withPromoted } from "./Restaurant_card";
import { SWIGGY_API } from "../utilis/constant";
import useListOfRestaurant from "../utilis/hooks/useListOfRestaurant";
import useOnlineStatus from "../utilis/hooks/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utilis/UserContext";

const Body2 = () => {
  const listOfrestaurants = useListOfRestaurant(SWIGGY_API);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchTex] = useState([]);

  const [userText, setUserText] = useState([]);

  const data = useContext(UserContext);

  const RestaurantPromotedCard = withPromoted(Restaurant_card);
  useEffect(() => {
    setFilteredRestaurant(listOfrestaurants);
  }, [listOfrestaurants]);

  const onlineStatus = useOnlineStatus();


  if (onlineStatus === false) return <h1> please check internet connection</h1>;

  if (listOfrestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className= {data.darkTheme ? " p-3 bg-slate-400 text-slate-800":"body  mx-4 "}>
      <div className="Search">
        <input
          type="text"
          data-testid ="searchInput"
          className="search-box my-4 px-1 border border-solid border-stone-700 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchTex(e.target.value);
          }}
        />
        <button
           data-testid ="search" className="search-button mx-4 px-2 bg-slate-600 rounded-lg  text-white  h-8"
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
        data-testid="top_rated_restaurant "
          className="filter-btn mx-4 bg-slate-600 rounded-lg text-white w-56 h-8"
          onClick={() => {
            const list = listOfrestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(list);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          className="search-box my-4 px-1 border border-solid border-stone-700 rounded-md"
          value={userText}
          onChange={(e) => {
            setUserText(e.target.value);
          }}
        />
        <button
          className="user-Text-button mx-4 px-2 bg-slate-600 rounded-lg  text-white  h-8"
          onClick={() => {
            data.setUserName(userText);
          }}
        >
          Change User Name
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) =>
          restaurant.info.avgRating >= 4.2 ? (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {" "}
              <RestaurantPromotedCard resData={restaurant} />
            </Link>
          ) : (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <Restaurant_card resData={restaurant} />{" "}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default Body2;
