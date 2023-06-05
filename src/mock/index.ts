import { GET_PODCASTS } from "../apollo";
import data from "./resp.json";

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
