import { ObjectId } from "mongodb";

import { MutationResolvers } from "../../../resolverTypes";
import { NoteModel } from "../../../models/Note";
import { UserModel } from "../../../models/User";

const resolvers: {
  Mutation: { shareNote: MutationResolvers.ShareNoteResolver };
} = {
  Mutation: {
    shareNote: async (_, { scopes, userId, noteId }, { req }) => {
      const note = await NoteModel.findById(noteId);

      if (!note) {
        throw new Error("could not find note");
      }

      if (!note || note._ownerId.toHexString() !== req.session.userId) {
        throw new Error("not authorized");
      }

      const user = await UserModel.findById(userId);

      if (!user) {
        throw new Error("could not find user");
      }

      user.notePermissions = [
        ...user.notePermissions.filter(
          x => x._noteId && x._noteId.toHexString() !== noteId
        ),
        { _noteId: new ObjectId(noteId), scopes }
      ];

      console.log(user.notePermissions);

      console.log(await user.save());

      return true;
    }
  }
};

export default resolvers;
