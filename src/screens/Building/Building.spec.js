import { render } from "@testing-library/react";

import Building from ".";

describe("Building component", () => {
  it("Should have navigation buttons and text", () => {
    const { getByText, container } = render(
      <Building prevLink={false} nextLink={true} />
    );

    const nextButton = getByText("Next");
    const prevButton = getByText("Prev");

    expect(nextButton).toBeTruthy();
    expect(nextButton.closest("button")).toBeEnabled();

    expect(prevButton).toBeTruthy();
    expect(prevButton.closest("button")).toBeDisabled();

    expect(container).toMatchSnapshot();
  });
});
