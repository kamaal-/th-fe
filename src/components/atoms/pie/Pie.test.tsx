import { describe, test, expect } from "vitest";
import Pie from "./Pie";
import { render, screen } from "@testing-library/react";

describe("<Pie/>", () => {
  test("<Pie/> Should render", () => {
    render(<Pie />);
    expect(screen.getByRole("pie")).toBeDefined();
  });

  test("<Pie/> Should animate", () =>
    new Promise((done) => {
      render(<Pie percentage={50} />);
      setTimeout(() => {
        expect(screen.getByRole("pie")).toHaveStyle(
          `background: conic-gradient(red 50%, white 0deg);`
        );
        done("");
      }, 4000);
    }));
});
