import { describe, test, expect } from "vitest";
import ContentFooter from "./ContentFooter";
import { render, screen } from "@testing-library/react";

describe("<ContentFooter/>", () => {
  test("<ContentFooter/> Should render", () => {
    render(<ContentFooter />);
    expect(screen.getByRole("content-footer")).toBeDefined();
  });
});
