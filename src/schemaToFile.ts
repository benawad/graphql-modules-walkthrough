import * as fs from "fs";
import { mergeGraphQLSchemas } from "@graphql-modules/epoxy";
import { loadSchemaFiles } from "@graphql-modules/sonar";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb-template";

fs.writeFile(
  "./schema.graphql",
  mergeGraphQLSchemas([
    DIRECTIVES,
    ...loadSchemaFiles(`${__dirname}/modules/`)
  ]),
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("schema saved to file");
    }
  }
);
