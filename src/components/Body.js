import Restaurant_card from "./Restaurant_card";
import reslist from "../utilis/mockdata";
const Body = () => {
    return (
      <div className="body">
        <div className="Search">
          <input type="text" />
          <button className="search_butt"></button>
        </div>
        <div className="res-container">
          {reslist.map((restaurant) => (
            <Restaurant_card resData={restaurant} key = { restaurant.info.id} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;