import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import Header from "./components/Headers";
import Body2 from "./components/Body2";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
// import Restaurant from "./components/Restaurant";


const Grocery = lazy(()=> import("./components/Grocery"));
 const Restaurant= lazy(()=>import("./components/Restaurant"));
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
        element:<Body2 />,
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
        element: (<Suspense fallback={<h1>Loading.....</h1>}><Restaurant /></Suspense>)
      },
      {
         path:"/grocery",
         element: (<Suspense fallback={<h1>Loading......</h1>}><Grocery/> </Suspense>  ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
