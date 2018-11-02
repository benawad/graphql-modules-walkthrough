import { makeExecutableSchema } from "graphql-tools";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb-template";
import { mergeGraphQLSchemas, mergeResolvers } from "@graphql-modules/epoxy";
import { loadSchemaFiles, loadResolversFiles } from "@graphql-modules/sonar";
import { applyMiddleware } from "graphql-middleware";
import { middleware } from "./middleware";

const schemaWithoutMiddleware = makeExecutableSchema({
  typeDefs: mergeGraphQLSchemas([
    DIRECTIVES,
    ...loadSchemaFiles(`${__dirname}/modules/`)
  ]),
  resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/modules`))
});

export const schema = applyMiddleware(schemaWithoutMiddleware, middleware);
