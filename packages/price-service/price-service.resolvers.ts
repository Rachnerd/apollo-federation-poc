import { Resolvers } from "@generated/gql.model";

export const resolvers: Resolvers = {
  Query: {
    netPrice() {
      return {
        value: "123",
        currency: "$"
      };
    }
  },
  Item: {
    netPrice(obj) {
      console.log(obj);
      return {
        value: "123",
        currency: "$"
      };
    }
  }
};
