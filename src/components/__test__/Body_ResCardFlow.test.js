import { fireEvent, render ,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body2 from "../Body2";
import MOCK_DATA from "../mocks/Body_Res_MOCKDATA.json";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load search item after search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body2 />
      </BrowserRouter>
    );
  });
  

  //Querying
  const SearchButton = screen.getByTestId("search");
  const SearchInputBox = screen.getByTestId("searchInput");

  fireEvent.change(SearchInputBox,{target:{value:"pizza"}});
  fireEvent.click(SearchButton);

  const res_card = screen.getAllByTestId("res_card");
 
  // Assertion 
  expect(res_card.length).toBe(3);
});

it("should filter the top restaurant card",async() =>{
  await act(async()=>{
    render(<BrowserRouter><Body2 /></BrowserRouter>);
  });
    //Querying 
    const filter=screen.getByTestId("top_rated_restaurant");
    fireEvent.click(filter);
    const res_card = screen.getAllByTestId("res_card");
    
    // assertion
    expect(res_card.length).toBe(16);
})
