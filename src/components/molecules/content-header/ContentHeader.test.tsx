import { describe, test, expect } from "vitest";
import ContentHeader from "./ContentHeader";
import { render, screen } from "@testing-library/react";

describe("<ContentHeader/>", () => {
  test("<ContentHeader/> Should render", () => {
    render(<ContentHeader title={"Hello"} subtitle={"World"} />);
    expect(screen.getByRole("content-header")).toHaveTextContent("Hello");
  });
});
