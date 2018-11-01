import { NoteModel } from "../../../models/Note";

export default {
  Query: {
    notes: () => NoteModel.find()
  }
};
