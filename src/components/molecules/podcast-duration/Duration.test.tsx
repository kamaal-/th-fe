import { describe, test, expect } from "vitest";
import Duration from "./Duration";
import { render, screen } from "@testing-library/react";

describe("<Duration/>", () => {
  test("<Duration/> Should render", () => {
    render(<Duration length={578} />);
    expect(screen.getByRole("duration")).toHaveTextContent("10m");
  });
});
