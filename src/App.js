import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Headers";
import Body2 from "./components/Body2";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import UserContext from "./utilis/UserContext";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utilis/redux/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const Restaurant = lazy(() => import("./components/Restaurant"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);
  const [theme, setTheme] =useState(null)
  useEffect(() => {
    const data = "Tanisha Garg";
    setUserName("Tanisha Garg");
    setTheme(true);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName, darkTheme: theme,setTheme }}>
      <div className="Applayout ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body2 />,
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
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Restaurant />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart />
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
