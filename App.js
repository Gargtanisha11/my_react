import React from "react";
import ReactDOM from "react-dom/client";
 
// react element 
// this is react eleement using react 
// what is going on below 
// React.createlement => react object => root.render => html element 
const heading = React.createElement("h1",
 { id:"heading"},
  " hello i am h1 tag ");

 // console.log(heading);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);

  // JSX
  // react eleement using jsx 
  const jsxheading = <h1 id="jsxheading" > {1+2} hello i am h1 tag using JSX </h1>
  root.render(jsxheading);