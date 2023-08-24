import React from "react";
import ReactDOM from "react-dom/client";

// react element
// this is react eleement using react
// what is going on below
// React.createlement => react object => root.render => html element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  " hello i am h1 tag "
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX
// react eleement using jsx


const Jsxheading2 = () => <h1 className="jsxheading2"> hello i am h1 tag using JSX</h1>


const Jsxheading3 = () => (
  <h1 className="jsxheading3"> hello i am h1 tag using JSX</h1>
);

const Jsxheading = () => {
  return (
    <h1 className="jsxheading">
      hello i am h1 tag using JSX
    </h1>
  );
};
const head = <h2 id="head "> hye i am h2 tag<Jsxheading/> </h2>;

root.render(head);
