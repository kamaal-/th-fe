import { describe, test, expect } from "vitest";
import Loader from "./Loader";
import { render, screen } from "@testing-library/react";

describe("<Loader/>", () => {
  test("<Loader/> Should render", () => {
    render(<Loader />);
    expect(screen.getByRole("loader")).toBeDefined();
  });
});
