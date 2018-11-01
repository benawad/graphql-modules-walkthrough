import { Schema, model, Document } from "mongoose";
import { NoteDbObject } from "../modelTypes";

const NoteSchema = new Schema({
  text: String
});

export const NoteModel = model<NoteDbObject & Document>("Note", NoteSchema);
