import { ItemResults, Resolvers } from "@generated/gql.model";

export const resolvers: Resolvers = {
  Query: {
    searchItems: (_, { query }) => {
      console.log(`Perform search for query: "${query}" ->  { ids: ["1", "2", "3"], page: 0, size: 1, totalElements: 2 }`);
      return {
        ids: ["1", "2", "3"],
        page: 0,
        size: 1,
        totalElements: 2
      } as ItemResults;
    }
  }
};
