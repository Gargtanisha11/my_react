import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Headers";
import { Provider } from "react-redux";
import appStore from "../../utilis/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("loading header component",()=>{
it("should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        {" "}
        <Header />{" "}
      </Provider>
    </BrowserRouter>
  );

  //Querying
  // const LoginButton = screen.getByText("LOGIN");
  const LoginButton = screen.getByRole("button", { name: "LOGIN" });

  //Assertion
  expect(LoginButton).toBeInTheDocument();
  //
});

it("should load header component with a Cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
 
  const cart = screen.getByText(/🛒/);

  //Assertion
  expect(cart).toBeInTheDocument();
  
});

it("should load header component with a Cartitems ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    //Querying
   
    const cartItems = screen.getByText("🛒(0items)");
  
    //Assertion
    expect(cartItems).toBeInTheDocument();
    
  });
  
it("should load logout after click login button",() => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            {" "}
            <Header />{" "}
          </Provider>
        </BrowserRouter>
      );
    
      //Querying
      // const LoginButton = screen.getByText("LOGIN");
      const LoginButton = screen.getByRole("button", { name: "LOGIN" });
     
      fireEvent.click(LoginButton);

      const LogoutButton = screen.getByRole("button", { name: "LOGOUT" });

      //Assertion
      expect(LogoutButton).toBeInTheDocument();
      
});

});