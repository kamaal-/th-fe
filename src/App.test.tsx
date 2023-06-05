import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";
import { mocks } from "./mock";

describe("<App/>", () => {
  test("<App/> Should show the loader", async () => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  test("<App/> Should Load the content 0", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByText("0")).toBeInTheDocument();
  });

  test("<App/> Should be able to type text", async () => {
    const user = userEvent.setup();
    render(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    const input: HTMLInputElement = await screen.findByRole("search");
    await user.type(input, "Hi");
    expect(await input).toHaveValue("Hi");
  });
});
