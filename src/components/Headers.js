import { useState } from "react";
import { LOGO_URL } from "../utilis/constant";
export const Header = () => {
  const [headButton, setHeadButton] = useState(["LOGIN"]);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt=" i am not here" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
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
