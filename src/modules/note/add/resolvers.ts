import { MutationResolvers } from "../../../resolverTypes";
import { NoteModel } from "../../../models/Note";
import { NoteDbObject } from "../../../types";

const resolvers: {
  Mutation: { addNote: MutationResolvers.AddNoteResolver<NoteDbObject> };
} = {
  Mutation: {
    addNote: (_, { text }) => {
      return new NoteModel({ text }).save();
    }
  }
};

export default resolvers;
