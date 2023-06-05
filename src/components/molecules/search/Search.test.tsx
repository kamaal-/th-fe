import { describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = () => ({});

describe("<Search/>", () => {
  test("<Search/> Should be able to type text", async () => {
    const user = userEvent.setup();
    render(<Search onChange={onChange} />);
    const input: HTMLInputElement = await screen.findByRole("search-input");
    await user.type(input, "Hi");
    expect(await input).toHaveValue("Hi");
  });

  test("<Search/> Should called the onChange", async () => {
    const spy = vi.fn(onChange);
    const user = userEvent.setup();
    render(<Search onChange={onChange} />);
    const input: HTMLInputElement = await screen.findByRole("search-input");
    await user.type(input, "Hi");
    await expect(spy).toHaveBeenCalledTimes(0);
  });
});
