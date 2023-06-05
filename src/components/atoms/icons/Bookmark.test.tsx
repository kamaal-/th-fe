import { describe, test, expect } from "vitest";
import Bookmark from "./Bookmark";
import { render, screen } from "@testing-library/react";

describe("<Bookmark/>", () => {
  test("<Bookmark/> Should render", () => {
    render(<Bookmark />);
    expect(screen.getByRole("bookmark")).toHaveAttribute("d");
  });
});
