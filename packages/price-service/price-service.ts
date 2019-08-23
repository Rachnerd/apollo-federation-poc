import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import * as path from "path";
import { resolvers } from "./price-service.resolvers";
import { buildFederatedSchema } from "@apollo/federation";

fs.readFile(path.resolve("price-service.graphql"), "utf8", (err, schema) => {
  if (err) throw err;

    const server = new ApolloServer({
        schema: buildFederatedSchema([
            {
                typeDefs: gql`
                  ${schema}
                `,
                resolvers: resolvers as any
            }
        ])
    });

  server.listen({ port: 4003 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
