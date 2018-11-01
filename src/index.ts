import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import * as mongoose from "mongoose";

import { schema } from "./schema";

mongoose.connect("mongodb://localhost/test");

const server = new ApolloServer({
  schema
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
