import { GET_PODCASTS } from "../apollo";
import data from "./resp.json";
import { GQL } from "../@types";
import jsonData from "./resp.json";

export const RESP_DATA: GQL.IPodcastResponse = {
  contentCards: {
    edges: jsonData.data.contentCards.edges.map((d) => {
      return { ...d, updatedAt: new Date() };
    }),
  },
} as unknown as GQL.IPodcastResponse;

export const mocks = [
  {
    request: {
      query: GET_PODCASTS,
      variables: {},
    },
    result: {
      data,
    },
  },
];

export const categories = [
  {
    name: "Cat",
    __typename: "cat",
  },
  {
    name: "Dog",
    __typename: "dog",
  },
];
