import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("", () => {
    test("Should load heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("Should load Button", () => {
        render(<Contact />);
        const button = screen.getByText("Submit feedback");
        expect(button).toBeInTheDocument();
    });

    test("Should load input", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("How can we help you?");
        expect(input).toBeInTheDocument();
    });

    test("load all input boxex", () => {
        render(<Contact />);
        const input = screen.getAllByRole("textbox");
        expect(input.length).toBe(5);
    });
});
