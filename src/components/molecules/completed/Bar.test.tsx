import { describe, test, expect } from "vitest";
import Bar from "./Bar.tsx";
import { render, screen } from "@testing-library/react";

describe("<Bar/>", () => {
  test("<Bar/> Should animate", () =>
    new Promise((done) => {
      render(<Bar percentage={50} />);
      setTimeout(() => {
        expect(screen.getByRole("bar")).toHaveStyle(`width: 50%;`);
        done("");
      }, 4500);
    }));

  test("<Bar/> Should not animate for -2", () =>
    new Promise((done) => {
      render(<Bar percentage={-2} />);
      setTimeout(() => {
        expect(screen.getByRole("bar")).toHaveStyle(`width: 0%`);
        done("");
      }, 4500);
    }));

  test("<Bar/> Should animate to 100%", () =>
    new Promise((done) => {
      render(<Bar percentage={110} />);
      setTimeout(() => {
        expect(screen.getByRole("bar")).toHaveStyle(`width: 100%;`);
        done("");
      }, 4500);
    }));
});
