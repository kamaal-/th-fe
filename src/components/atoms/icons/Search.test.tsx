import { describe, test, expect } from "vitest";
import Search from "./Search.tsx";
import { render, screen } from "@testing-library/react";

describe("<Search/>", () => {
  test("<Search/> Should render", () => {
    render(<Search />);
    expect(screen.getByRole("search")).toHaveAttribute("d");
  });
});
