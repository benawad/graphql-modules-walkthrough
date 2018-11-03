import { NoteModel, NoteModelType } from "../../../models/Note";
import { QueryResolvers } from "../../../resolverTypes";
import { UserModel } from "../../../models/User";

const resolvers: {
  Query: {
    note: QueryResolvers.NoteResolver<Promise<NoteModelType | null>>;
  };
} = {
  Query: {
    note: async (_, { id }, { req }) => {
      const note = await NoteModel.findById(id);

      if (!note || note._ownerId.toHexString() === req.session.userId) {
        return note;
      }

      const currentUser = await UserModel.findById(req.session.userId);

      if (!currentUser) {
        throw new Error("Could not find user");
      }

      const notePermission = currentUser.notePermissions.find(
        x => x._noteId === note._id
      );

      if (!notePermission) {
        throw new Error("not authorized");
      }

      return notePermission.scopes.includes("READ") ? note : null;
    }
  }
};

export default resolvers;
