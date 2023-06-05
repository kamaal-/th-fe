import { describe, test, expect } from "vitest";
import Clock from "./Clock";
import { render, screen } from "@testing-library/react";

describe("<Clock/>", () => {
  test("<Clock/> Should render", () => {
    render(<Clock />);
    expect(screen.getByRole("clock")).toHaveAttribute("d");
  });
});
