import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utilis/redux/appStore";
import Headers from "../Headers";
import Cart from "../Cart";
import Restaurant from "../Restaurant";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/ResMenuCategory_MOCKDATA.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should update cart items after click add button in itemList", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Headers />
          <Restaurant />
        </Provider>
      </BrowserRouter>
    );
  });

  const menu_card = screen.getAllByTestId("menu-card");
  fireEvent.click(menu_card[0]);

  const addButton = screen.getAllByText("ADD+");
  fireEvent.click(addButton[1]);

  const CartList = screen.getByText("🛒(1items)");
  expect(CartList).toBeInTheDocument;
});

it("Sholud update Cart page after clicking add button in item list", async() => {
  await act(async()=>{render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Restaurant />
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  })
  const menu_card = screen.getAllByTestId("menu-card");
  fireEvent.click(menu_card[0]);
  const addButton = screen.getAllByText("ADD+");
 
  fireEvent.click(addButton[0]);
  const CartItems = screen.getAllByTestId("cart-items");
  expect(CartItems.length).toBe(2);
});

// it("should Clear the cart after clicking clear cart button ", () => {
//    render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//       <Cart />
//     </Provider>
//     </BrowserRouter>
//    );

//    const CartItems = screen.getAllByTestId("cart-items");
//   expect(CartItems.length).toBe(1);
// })
