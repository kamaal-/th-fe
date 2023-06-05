import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api.tigerhall.net/v2/",
  cache: new InMemoryCache(),
});

export const GET_PODCASTS = gql`
  query ContentCards($keywords: String) {
    contentCards(filter: { keywords: $keywords, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          id
          length
          updatedAt
          categories {
            ...Category
          }
          image {
            ...Image
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }
  fragment Category on Category {
    name
  }
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
