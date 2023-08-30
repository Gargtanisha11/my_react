import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPaage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="Applayout">
      <Header />
      <Body />
    </div>
  );
};
const appRoute = createBrowserRouter([
{
  path:"/",
  element: <AppLayout />,
  errorElement : <ErrorPage />
},
{
  path:"/about",
  element : <About />
},
{
  path: "/contact",
  element: <Contact />
}
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
