import { CDN_URL } from "../utilis/constant";
import { Link } from "react-router-dom";

const Restaurant_card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, id } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <Link to={"/restaurants/" + id}>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};
export default Restaurant_card;
