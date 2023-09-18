import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Restaurant_card, { withPromoted } from "../Restaurant_card";
import MOCK_DATA from "../mocks/ResCard_MOCKDATA.json";
it("check restaurant card", () => {
  render(<Restaurant_card resData={MOCK_DATA} />);
  //Querying
  const name = screen.getByText("McDonald's");
  //assetion
  expect(name).toBeInTheDocument();
});

it("check Promoted Card", () => {
  const RestaurantPromotedCard = withPromoted(Restaurant_card);
  render(<RestaurantPromotedCard resData={MOCK_DATA} />);
  const Promoted = screen.getByText("Promoted");
  expect(Promoted).toBeInTheDocument();
});
