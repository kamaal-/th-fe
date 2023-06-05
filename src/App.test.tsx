import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
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

  test("<App/> Should Load the content", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByText("Hi")).toBeInTheDocument();
  });
});
