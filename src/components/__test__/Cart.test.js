import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mock/RestaurantData.json";
import appStore from "../../redux/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("should render restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );
    expect(screen.getAllByTestId("food-items").length).toBe(4);
});

test("should render restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    const addButton = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addButton[0]);
    expect(screen.getByText("Card (1)")).toBeInTheDocument();
});

test("should render restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    const addButton = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addButton[1]);
    expect(screen.getByText("Card (2)")).toBeInTheDocument();
});

test("should render restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );

    expect(screen.getAllByTestId("food-items").length).toBe(6);
});

test("should render restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("food-items").length).toBe(4);
    expect(screen.getByText("Cart is empty Please add items to the cart!")).toBeInTheDocument();
});
