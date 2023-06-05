import { ApolloError } from "@apollo/client";

export namespace UI {
  export interface IExpert {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
  }

  export interface IPodcast {
    categories: string;
    name: string;
    updatedAt: string;
    id: string;
    experts: Array<IExpert>;
    image: GQL.IImage;
    length: number;
  }

  export type ImageSize = {
    width: number;
    height: number;
  };
}

export namespace GQL {
  export interface IImage {
    uri: string;
  }

  export interface IExpert {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
    __typename: string;
  }

  export interface ICategory {
    name: string;
    __typename: string;
  }

  export interface IEdge {
    categories: Array<ICategory>;
    experts: Array<IExpert>;
    image: IImage;
    name: string;
    id: string;
    updatedAt: string;
    length: number;
  }

  export interface IPodcastResponse {
    contentCards: {
      edges: Array<IEdge>;
      __typename: string;
      meta: {
        size: number;
      };
    };
  }

  export type SearchUpdateFunc = (searchVal: string) => void;

  export type UseQueryReturnType = {
    data: Array<UI.IPodcast>;
    loading: boolean;
    updateSearch: SearchUpdateFunc;
    error: ApolloError | undefined;
  };
}
