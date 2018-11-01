/* tslint:disable */
import { ObjectID } from "mongodb";

export interface AdditionalEntityFields {
  path?: string | null;
  type?: string | null;
}
export interface NoteDbObject {
  _id: ObjectID;
  text: string;
}

export interface Note {
  id: string;
  text: string;
}
export interface AddNoteMutationArgs {
  text: string;
}
