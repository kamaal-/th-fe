import { describe, test, expect } from "vitest";
import Completed from "./Completed.tsx";
import { render, screen } from "@testing-library/react";

describe("<Completed/>", () => {
  test("<Completed/> Should render", () => {
    render(<Completed />);
    expect(screen.getByRole("completed")).toHaveTextContent("45% Completed");
  });

  test("<Completed/> Should render with 25%", () => {
    render(<Completed percentage={25} />);
    expect(screen.getByRole("completed")).toHaveTextContent("25% Completed");
  });

  test("<Completed/> Should render with 0%", () => {
    render(<Completed percentage={-2} />);
    expect(screen.getByRole("completed")).toHaveTextContent("0% Completed");
  });

  test("<Completed/> Should render with 100%", () => {
    render(<Completed percentage={122} />);
    expect(screen.getByRole("completed")).toHaveTextContent("100% Completed");
  });
});
