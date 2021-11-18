import { render } from "@testing-library/react";

import Room from ".";

describe("Room component", () => {
  it("Should have navigation button and text", () => {
    const { getByText, container } = render(<Room prevLink={true} />);

    expect(getByText("Next")).toBeTruthy();
    expect(getByText("Next").closest("button")).toBeDisabled();

    expect(getByText("Prev")).toBeTruthy();
    expect(getByText("Prev").closest("button")).toBeEnabled();

    expect(container).toMatchSnapshot();
  });
});
