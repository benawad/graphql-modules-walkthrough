import { Schema, model, Document } from "mongoose";
import { NoteDbObject } from "../modelTypes";

const NoteSchema = new Schema({
  text: String,
  _ownerId: { type: Schema.Types.ObjectId, ref: "User" },
  visible: { type: Boolean, default: true }
});

export type NoteModelType = NoteDbObject & Document;

export const NoteModel = model<NoteModelType>("Note", NoteSchema);
