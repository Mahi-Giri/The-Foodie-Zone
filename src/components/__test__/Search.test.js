import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../Search";
import MOCK_DATA from "../Mock/AllCardMockData.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("Render Header component with search card list for burger text input", async () => {
    await act(async () => render(<Search />));

    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchButton);

    const card = screen.getAllByTestId("card");

    expect(card.length).toBe(1);
});
