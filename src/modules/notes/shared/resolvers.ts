import { NoteDbObject } from "../../../modelTypes";

export default {
  Note: {
    id: ({ _id }: NoteDbObject) => _id.toHexString()
  }
};
