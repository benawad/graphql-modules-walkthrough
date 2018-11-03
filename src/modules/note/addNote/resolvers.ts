import { MutationResolvers } from "../../../resolverTypes";
import { NoteModel } from "../../../models/Note";
import { NoteDbObject } from "../../../types";

const resolvers: {
  Mutation: { addNote: MutationResolvers.AddNoteResolver<NoteDbObject> };
} = {
  Mutation: {
    addNote: (_, { text, visible }, { req }) => {
      return new NoteModel({
        text,
        visible,
        _ownerId: req.session.userId
      }).save();
    }
  }
};

export default resolvers;
