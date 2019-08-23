import { Item, ItemNotFound, Resolvers } from "@generated/gql.model";

const item1: Item = {
    id: "1",
    name: "",
    description: "Desc",
    min: 5,
    rounding: 5,
    quantity: 1
};

const item2: Item = {
    id: "2",
    name: "",
    description: "Desc",
    min: 10,
    rounding: 10,
    quantity: 10
};

export const resolvers: Resolvers = {
    ItemResult: {
        __resolveType(obj: any) {
            if (obj.name !== undefined) {
                return "Item";
            }
            return "ItemNotFound";
        }
    },
    Query: {
        item: (_, {id}) => {
            return id === "1"
                ? item1 : id === "2"
                    ? item2
                    : ({
                        id
                    } as ItemNotFound);
        }
    },
    ItemResults: {
        content: pagination => {
            console.log(`Resolve Items: ["1", "2", "3"]`);
            return pagination.ids.map(id =>
                id === "1"
                    ? item1 : id === "2"
                    ? item2
                    : ({
                        id
                    } as ItemNotFound)
            );
        }
    }
};
