import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { fetch } from "cross-fetch";

global.fetch = fetch;
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
