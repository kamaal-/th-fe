import { describe, expect, test } from "vitest";
import {
  getCategoriesFromGQL,
  cleanupFirstWord,
  findIndexOfRegexMatcher,
  omitPropFromObject,
  domainMatcher,
  omitPropFromList,
  getResizeSegment,
  fixImageURLWithSize,
} from "./helper.ts";
import { categories, RESP_DATA } from "../mock";

describe("Helper", () => {
  test("<cleanupFirstWord> Should trim audio", () => {
    expect(cleanupFirstWord("audio World")).equals("World");
  });

  test("<cleanupFirstWord> should ignore", () => {
    expect(cleanupFirstWord("World")).equals("World");
  });

  test("<getCategoriesFromGQL>", () => {
    expect(getCategoriesFromGQL(categories)).toEqual("Cat, Dog");
  });

  test("<findIndexOfRegexMatcher> should return 4", () => {
    expect(findIndexOfRegexMatcher("https://", new RegExp("^http"))).equals(4);
  });

  test("<findIndexOfRegexMatcher> should return -1", () => {
    expect(findIndexOfRegexMatcher("https://", new RegExp("^tcp"))).equals(-1);
  });

  test("<findIndexOfRegexMatcher> should return 28", () => {
    expect(
      findIndexOfRegexMatcher(
        "https://static.tigerhall.com/uploads/image-f0d2dcef-0533-4556-bd21-05be750c5e00-building-good-business-networks-ip_saw-jpg",
        new RegExp("^http?s:(.*)com")
      )
    ).equals(28);
  });

  test("<omitPropFromObject>", () => {
    expect(omitPropFromObject(categories[0], "__typename")).toEqual({
      name: "Cat",
    });
  });

  test("<omitPropFromList>", () => {
    expect(omitPropFromList(categories, "__typename")).toEqual([
      { name: "Cat" },
      { name: "Dog" },
    ]);
  });

  test("<fixImageURLWithSize> should return 320x", () => {
    expect(
      fixImageURLWithSize(
        RESP_DATA.contentCards.edges[0].image.uri,
        domainMatcher
      )
    ).equals(
      "https://images.staging.tigerhall.io/resize/320x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png"
    );
  });

  test("<fixImageURLWithSize> should return 600x", () => {
    expect(
      fixImageURLWithSize(
        RESP_DATA.contentCards.edges[0].image.uri,
        domainMatcher,
        600
      )
    ).equals(
      "https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png"
    );
  });

  test("<fixImageURLWithSize> should not update the url", () => {
    expect(
      fixImageURLWithSize(
        RESP_DATA.contentCards.edges[0].image.uri,
        new RegExp("^xml"),
        600
      )
    ).equals(RESP_DATA.contentCards.edges[0].image.uri);
  });

  test("<getResizeSegment> should return /resize/600x", () => {
    expect(getResizeSegment(600)).equals("/resize/600x");
  });

  test("<getResizeSegment> should return updater600y", () => {
    expect(getResizeSegment(600, "updater", "y")).equals("updater600y");
  });
});
