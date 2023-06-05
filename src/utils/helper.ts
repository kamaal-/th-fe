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

export const findIndexOfRegexMatcher = (url: string, regex: RegExp): number => {
  const match = regex.exec(url);
  return match ? match[0].length : -1;
};

export const omitPropFromObject = <T>(
  expert: T,
  key: keyof T
): Omit<T, typeof key> => {
  const { [key]: _, ...rest } = expert;
  return { ...rest };
};

export const omitPropFromList = <T>(
  list: Array<T>,
  key: keyof T
): Array<Omit<T, typeof key>> =>
  list.map((item) => omitPropFromObject(item, key));
