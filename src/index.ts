import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import * as mongoose from "mongoose";
import * as session from "express-session";
import * as ConnectMongo from "connect-mongo";

import { schema } from "./schema";

mongoose.connect("mongodb://localhost/test");

const MongoStore = ConnectMongo(session);

const server = new ApolloServer({
  schema,
  context: ({ req }: any) => ({ req })
});

const app = express();

app.use(
  session({
    secret: "qoieujoiwjdlkasdl",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
