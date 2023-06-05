import { describe, test, expect } from "vitest";
import Share from "./Share";
import { render, screen } from "@testing-library/react";

describe("<Share/>", () => {
  test("<Share/> Should render", () => {
    render(<Share />);
    expect(screen.getByRole("share")).toHaveAttribute("d");
  });
});
