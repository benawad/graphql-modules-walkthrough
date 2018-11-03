import { UserDbObject } from "../../../modelTypes";
import { NoteModel } from "../../../models/Note";

export default {
  User: {
    id: ({ _id }: UserDbObject) => _id.toHexString(),
    notes: ({ _id }: UserDbObject) => NoteModel.find({ _ownerId: _id })
  }
};
