import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact us Test case", () => {
 // we can use test or it for write test cases both are alias 
  it(" check loading of input Boxes on contact component", () => {
    render(<Contact />);
    // Querying
    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();

  });
  
  it(" check loading of input Boxes on contact component", () => {

    render(<Contact />);

    // Querying
    // const heading = screen.getByRole("heading");
    const inputBoxes = screen.getAllByRole("textbox");
   

    //assertion
    expect(inputBoxes.length).toBe(2);

  });

  it(" check loading of button on contact component", () => {

    render(<Contact />);

    // Querying
    const button = screen.getByText("Submit");

    //assertion
    expect(button).toBeInTheDocument();

  });
});
