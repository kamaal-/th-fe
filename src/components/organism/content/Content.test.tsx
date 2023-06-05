import { describe, test, expect } from "vitest";
import Content from "./Content";
import { render, screen } from "@testing-library/react";
import { PODCAST_LIST } from "../../../mock";

describe("<Content/>", () => {
  test("<Content/> Should render", () => {
    render(<Content loading={false} podcast={PODCAST_LIST[0]} />);
    expect(screen.getByText("Vincent")).toBeInTheDocument();
  });
});
