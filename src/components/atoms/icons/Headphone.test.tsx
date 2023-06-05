import { describe, test, expect } from "vitest";
import Headphone from "./Headphone";
import { render, screen } from "@testing-library/react";

describe("<Headphone/>", () => {
  test("<Headphone/> Should render", () => {
    render(<Headphone />);
    expect(screen.getByRole("headphone")).toHaveAttribute("d");
  });
});
