import { describe, test, expect } from "vitest";
import Cover from "./Cover";
import { render, screen } from "@testing-library/react";
import { mock_image } from "../../../mock";

describe("<Cover/>", () => {
  test("<Cover/> Should render", () => {
    render(<Cover length={58} uri={mock_image} />);
    expect(screen.getByRole("cover")).toBeDefined();
  });
});
