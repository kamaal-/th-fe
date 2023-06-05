import { describe, test, expect } from "vitest";
import CoverMeta from "./CoverMeta";
import { render, screen } from "@testing-library/react";

describe("<CoverMeta/>", () => {
  test("<CoverMeta/> Should render", () => {
    render(<CoverMeta length={587} />);
    expect(screen.getByRole("cover-meta")).toBeDefined();
  });
});
