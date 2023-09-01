import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import Header from "./components/Headers";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPaage";
import Restaurant from "./components/Restaurant";

const AppLayout = () => {
  return (
    <div className="Applayout">
      <Header />
      <Outlet />
    </div>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <Restaurant />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
