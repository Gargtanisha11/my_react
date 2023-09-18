import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constant";
import useOnlineStatus from "../utilis/hooks/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [headButton, setHeadButton] = useState(["LOGIN"]);
  
  const data= useContext(UserContext);

  const onlineStatus=useOnlineStatus();
   
  const cartItems=useSelector((store)=>store.cart.items);

  // console.log(cartItems);
 
  useEffect(()=>{
    // console.log("useEffect")
  },[headButton]);

 
  return (
    <div className="flex justify-between bg-slate-200 shadow-2xl ">
      <div className="w-40 ">
        <img className="" src={LOGO_URL} alt=" i am not here" />
      </div>
      <div className="nav-items text-2xl content-center px-2">
        <ul className="flex  m-10 content-center  ">
          <li className="my-5 mx-3">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
          <li className="my-5 mx-3"> <Link to="/">Home</Link></li>
          <li className="my-5 mx-3"><Link to="/about">About us</Link></li>
          <li className="my-5 mx-3"> <Link to="/contact"> Contact</Link> </li>
          <li className="my-5 mx-3"><Link to ="/Grocery">Grocery</Link></li>
          <li className="my-5 mx-3 text-2xl" data-testid="cart"><Link to="./cart">🛒({cartItems.length}items)</Link></li>
          <li className="my-5 mx-3  "> {data.loggedInUser}</li>
          <button
             className=" my-4 mx-2 bg-emerald-700 text-white w-28 h-12 rounded-s-lg "
            onClick={() => {
              headButton == "LOGIN"
                ? setHeadButton("LOGOUT")
                : setHeadButton("LOGIN");
            }}
          >
            {headButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
 
export default Header;
