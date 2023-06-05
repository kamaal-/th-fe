import { describe, expect, test } from "vitest";
import {
  getCategoriesFromGQL,
  cleanupFirstWord,
  findIndexOfRegexMatcher,
  omitPropFromObject,
  omitPropFromList,
} from "./helper.ts";
import { categories } from "../mock";

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
});
