import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constant";
import useOnlineStatus from "../utilis/useOnlineStatus";


export const Header = () => {
  const [headButton, setHeadButton] = useState(["LOGIN"]);
  
  useEffect(()=>{
    console.log("useEffect")
  },[headButton]);

  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-200 shadow-2xl sticky  top-0 z-50">
      <div className="w-40">
        <img className="" src={LOGO_URL} alt=" i am not here" />
      </div>
      <div className="nav-items text-2xl content-center px-2">
        <ul className="flex  m-10 content-center ">
          <li className="m-5 ">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
          <li className="m-5"> <Link to="/">Home</Link></li>
          <li className="m-5"><Link to="/about">About us</Link></li>
          <li className="m-5"> <Link to="/contact"> Contact</Link> </li>
          <li className="m-5"><Link to ="/Grocery">Grocery</Link></li>
          <li className="m-5">Cart</li>
          <button
             className=" my-4 bg-emerald-700 text-white w-28 h-12 rounded-s-lg "
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
