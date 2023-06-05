import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";
import { mocks } from "./mock";

describe("<App/>", () => {
  test("<App/> Should Load the content 0", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByRole("loader")).toBeDefined();
  });

  test("<App/> Should be able to type text", async () => {
    const user = userEvent.setup();
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    const input: HTMLInputElement = await screen.findByRole("search-input");
    await user.type(input, "Hi");
    expect(await input).toHaveValue("Hi");
  });
});
