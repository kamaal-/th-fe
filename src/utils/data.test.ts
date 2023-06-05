import { describe, expect, test } from "vitest";
import { transformDataToFitUI } from "./data.ts";
import { PODCAST_LIST, RESP_DATA } from "../mock";

describe("Helper", () => {
  test("<transformDataToFitUI> should return empty list", () => {
    expect(transformDataToFitUI(undefined)).toEqual([]);
  });

  test("<transformDataToFitUI> should list of podcasts", () => {
    expect(transformDataToFitUI(RESP_DATA)).toEqual(PODCAST_LIST);
  });
});
