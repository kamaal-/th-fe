import { describe, test, expect } from "vitest";
import CoverImage from "./CoverImage";
import { render, screen } from "@testing-library/react";
import { mock_image } from "../../../mock";

describe("<CoverImage/>", () => {
  test("<CoverImage/> Should render", () => {
    render(<CoverImage url={mock_image} />);
    expect(screen.getByRole("cover-image")).toBeDefined();
  });
});
