import { GQL, UI } from "../@types";
import {
  cleanupFirstWord,
  getCategoriesFromGQL,
  omitPropFromList,
  fixImageURLWithSize,
  domainMatcher,
} from "./helper.ts";
import moment from "moment";

export const transformDataToFitUI = (
  data: GQL.IPodcastResponse | undefined
): Array<UI.IPodcast> => {
  return data && data.contentCards
    ? data.contentCards.edges.map((e) => ({
        categories: getCategoriesFromGQL(e.categories),
        name: cleanupFirstWord(e.name),
        id: e.id,
        length: e.length,
        updatedAt: moment(e.updatedAt).fromNow(),
        experts: omitPropFromList(e.experts, "__typename") as Array<UI.IExpert>,
        image: {
          uri: fixImageURLWithSize(e.image.uri, domainMatcher, 600),
        },
      }))
    : [];
};
