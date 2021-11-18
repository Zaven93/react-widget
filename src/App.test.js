import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { NavContext } from "./context/navContext";
import { wrapNavProvider } from "./tests/utils";

const getButtonByName = (name) => screen.getByRole("button", { name });

describe("App component render flow", () => {
  it("Shows Loading... indicator when data is not ready yet", () => {
    render(
      <NavContext.Provider value={null}>
        <App />
      </NavContext.Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Shows the Building component on the first render when data from context is received", () => {
    const { getByTestId } = render(wrapNavProvider(<App />));

    expect(getByTestId(/building-screen/)).toBeInTheDocument();
  });

  it("Switches between screens", () => {
    const { getByRole, getByTestId } = render(wrapNavProvider(<App />));

    const nextButton = getByRole("button", { name: "Next" });

    fireEvent.click(nextButton);

    expect(getByTestId(/floor-screen/)).toBeInTheDocument();

    fireEvent.click(getButtonByName("Next"));

    expect(getByTestId(/room-screen/)).toBeInTheDocument();

    expect(getButtonByName("Next")).toBeDisabled();

    fireEvent.click(getButtonByName("Prev"));
    expect(getByTestId(/floor-screen/)).toBeInTheDocument();
    expect(getButtonByName("Next")).toBeEnabled();
    expect(getButtonByName("Prev")).toBeEnabled();

    fireEvent.click(screen.getByRole("button", { name: "Prev" }));
    expect(getByTestId(/building-screen/)).toBeInTheDocument();

    expect(getButtonByName("Prev")).toBeDisabled();
  });
});
