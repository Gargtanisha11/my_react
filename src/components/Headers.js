
import {LOGO_URL} from "../utilis/constant";
export const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt=" i am not here"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;