import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constant";


export const Header = () => {
  const [headButton, setHeadButton] = useState(["LOGIN"]);
  
  useEffect(()=>{
    console.log("useEffect")
  },[headButton]);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt=" i am not here" />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li> <Link to="/contact"> Contact</Link> </li>
          <li>Cart</li>
          <button
            className="head-btn"
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
