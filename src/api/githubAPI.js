import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer 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`
  }
});
