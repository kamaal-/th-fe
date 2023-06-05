import { describe, test, expect } from "vitest";
import ContentList from "./ContentList";
import { render, screen } from "@testing-library/react";
import { PODCAST_LIST } from "../../../mock";

describe("<ContentList/>", () => {
  test("<ContentList/> Should render", () => {
    render(<ContentList loading={false} data={PODCAST_LIST} />);
    expect(screen.getByText("Vincent")).toBeInTheDocument();
  });
});
