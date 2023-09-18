import { useContext } from "react";
import { CDN_URL } from "../utilis/constant";
import { Link } from "react-router-dom";
import UserContext from "../utilis/UserContext";

const Restaurant_card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, id } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  const data=useContext(UserContext);

  return (
    // <Link to={"/restaurants/" + id}>
      <div className="res-card bg-slate-300 p-2 m-2 w-60 h-auto rounded-md" data-testid="res_card">
        <img
          className="res-logo w-56 h-36 rounded-md"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-xl font-bold py-4">{name}</h3>
        <h4 className=" py-1">{cuisines.join(" , ")}</h4>
        <h4 className=" py-1">{avgRating}⭐</h4>
        <h4 className=" py-1">{costForTwo}</h4>
        <h4 className=" py-1">{deliveryTime} minutes</h4>
       
      </div>
    // </Link>
  );
};

 export const withPromoted =(Restaurant_card)=>{
  return (props)=>{
    return <div>
      <label className="absolute z-20 bg-black text-white rounded-md m-2 p-2"> Promoted</label>
      <Restaurant_card {...props}/>
    </div>
  }
 }
export default Restaurant_card;
