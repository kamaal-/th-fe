import { describe, test, expect } from "vitest";
import Empty from "./Empty";
import { render, screen } from "@testing-library/react";

describe("<Empty/>", () => {
  test("<Empty/> Should render", () => {
    render(<Empty />);
    expect(screen.getByRole("empty-result")).toBeDefined();
  });
});
