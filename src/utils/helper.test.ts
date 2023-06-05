import { describe, expect, test } from "vitest";
import { getCategoriesFromGQL, cleanupFirstWord } from "./helper.ts";
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
});
