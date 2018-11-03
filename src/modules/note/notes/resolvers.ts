import { DocumentQuery } from "mongoose";

import { NoteModel, NoteModelType } from "../../../models/Note";
import { QueryResolvers } from "../../../resolverTypes";

const resolvers: {
  Query: {
    notes: QueryResolvers.NotesResolver<
      DocumentQuery<NoteModelType[], NoteModelType, {}>
    >;
  };
} = {
  Query: {
    notes: () => NoteModel.find({ visible: true })
  }
};

export default resolvers;
