import { render, screen } from "@testing-library/react";

import Floor from ".";

describe("Floor component", () => {
  it("Should have navigation button and text", () => {
    const { getByText, container } = render(
      <Floor nextLink={true} prevLink={true} />
    );

    const nextButton = getByText("Next");
    const prevButton = getByText("Prev");

    expect(nextButton).toBeTruthy();
    expect(nextButton.closest("button")).toBeEnabled();

    expect(prevButton).toBeTruthy();
    expect(prevButton.closest("button")).toBeEnabled();

    expect(container).toMatchSnapshot();
  });
});
