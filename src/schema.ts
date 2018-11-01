import { makeExecutableSchema } from "graphql-tools";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb-template";
import { mergeGraphQLSchemas, mergeResolvers } from "@graphql-modules/epoxy";
import { loadSchemaFiles, loadResolversFiles } from "@graphql-modules/sonar";

export const schema = makeExecutableSchema({
  typeDefs: mergeGraphQLSchemas([
    DIRECTIVES,
    ...loadSchemaFiles(`${__dirname}/modules/`)
  ]),
  resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/modules`))
});
