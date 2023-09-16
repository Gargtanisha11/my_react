import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-black text-xl text-white p-10  ">
      <h1> This our Dummy footer</h1>

      <ul className="m-4">
        <li className="m-2">
          <Link to={"./about"}>About</Link>
        </li>
        <li className="m-2">
          <Link to={"./contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
