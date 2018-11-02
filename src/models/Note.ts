import { Schema, model, Document } from "mongoose";
import { NoteDbObject } from "../modelTypes";

const NoteSchema = new Schema({
  text: String
});

export type NoteModelType = NoteDbObject & Document;

export const NoteModel = model<NoteModelType>("Note", NoteSchema);
