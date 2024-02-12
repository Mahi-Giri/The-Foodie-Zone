import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Card";
import MOCK_DATA from "../Mock/CardMock.json";

test("should render Card with Props Data", () => {
  render(<Card data={MOCK_DATA} />);
  const card = screen.getByText("Theobroma");
  expect(card).toBeInTheDocument();
});
