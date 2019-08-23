import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
    serviceList: [
        {name: "search", url: "http://localhost:4001/graphql"},
        {name: "item", url: "http://localhost:4002/graphql"},
        {name: "price", url: "http://localhost:4003/graphql"}
    ],

});

const server = new ApolloServer({gateway, subscriptions: false, tracing: true});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
