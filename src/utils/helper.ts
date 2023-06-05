import { GQL } from "../@types";

export const domainMatcher = new RegExp(
  "^(?:https?:\\/\\/)?([\\/\\n])?(?:www\\.)?([^:\\/?\\n]+)"
);

export const cleanupFirstWord = (str: string): string => {
  const stringList = str.split(" ");
  if (stringList.length > 1) {
    stringList.shift();
  }
  return stringList.join(" ");
};

export const getCategoriesFromGQL = (
  categories: Array<GQL.ICategory>
): string => categories.map((c) => cleanupFirstWord(c.name)).join(", ");
