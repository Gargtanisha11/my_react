import React from "react";
import ReactDOM from "react-dom/client";

// component in our app
/*
->Header
  ->Logo
  ->Nav items
->Body
 ->Search
    -> Search input
    ->Seacrh logo
  ->Restaurant container
    ->Restaurant Cards   
      -> img 
      -> name of restaurant, start rating ,cuisine ,delivery time  
->Footer
  ->copyright
  ->link
  ->address
  ->contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
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

const Restaurant_card = (props) => {
  const{resName,cuisins}=props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/biryani-recipe-2.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisins}</h4>
      <h4>4.4 stars</h4>
      <h4>36 minutes</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="Search">
        <input type="text" />
        <button className="search_butt"></button>
      </div>
      <div className="res-container">
        <Restaurant_card  resName="KFC" cuisins="Burger, Fast Food" rating="4.4 stars"/>
        <Restaurant_card resName="Meghana Foods" cuisins="Briyani, North Indian, Asian"/>
       
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="Applayout">
      <Header />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
