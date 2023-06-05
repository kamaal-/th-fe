import { GET_PODCASTS } from "../apollo";
import data from "./resp.json";
import { GQL, UI } from "../@types";
import jsonData from "./resp.json";

export const mock_image =
  "https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3920&q=80";

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

export const PODCAST_LIST: Array<UI.IPodcast> = [
  {
    categories: "Enola, Ila, Loyal",
    updatedAt: "a few seconds ago",
    experts: [
      {
        company: "",
        firstName: "Reilly",
        lastName: "Brakus",
        title: "",
      },
    ],
    id: "4df31710-345b-4b10-8658-9d9a4da68d85",
    image: {
      uri: mock_image, // "https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
    },
    name: "Vincent",
    length: 1587,
  },
  {
    categories: "Enola, Kailey, Loyal",
    updatedAt: "a few seconds ago",
    experts: [
      {
        company: "",
        firstName: "Chadd",
        lastName: "Waelchi",
        title: "",
      },
    ],
    id: "72f5f8ec-8e3a-4cbb-ad9c-c5eb552d9493",
    image: {
      uri: mock_image, // "https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
    },
    name: "Mauricio",
    length: 1587,
  },
  {
    categories: "Enola, Loyal, Susanna",
    updatedAt: "a few seconds ago",
    length: 1587,
    experts: [
      {
        company: "",
        firstName: "Logan",
        lastName: "Schaefer",
        title: "",
      },
    ],
    id: "1a09a911-8296-4989-b8a6-3b42bd2c7ce5",
    image: {
      uri: mock_image, //"https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
    },
    name: "Cleta",
  },
  {
    categories: "Kailey, Loyal, Susanna",
    updatedAt: "a few seconds ago",
    length: 1587,
    experts: [
      {
        company: "",
        firstName: "Reilly",
        lastName: "Brakus",
        title: "",
      },
    ],
    id: "2a1984ba-464d-4ab8-909b-e939629e4646",
    image: {
      uri: mock_image, // "https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
    },
    name: "Claudie",
  },
  {
    categories: "Enola, Kailey, Loyal",
    updatedAt: "a few seconds ago",
    length: 1587,
    experts: [
      {
        company: "",
        firstName: "Mozelle",
        lastName: "Lemke",
        title: "",
      },
    ],
    id: "8ffe92cc-4794-49ae-911f-485c124a301a",
    image: {
      uri: mock_image, // "https://images.staging.tigerhall.io/resize/600x/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
    },
    name: "Savanah",
  },
];
