import { MutationResolvers } from "../../../resolverTypes";
import { NoteModel } from "../../../models/Note";

const resolvers: { Mutation: MutationResolvers.Resolvers } = {
  Mutation: {
    addNote: (_, { text }) => {
      return new NoteModel({ text }).save() as any;
    }
  }
};

export default resolvers;
