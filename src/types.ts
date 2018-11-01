/* tslint:disable */
import { ObjectID } from "mongodb";

export interface AdditionalEntityFields {
  path?: string | null;
  type?: string | null;
}
export interface NoteDbObject {
  _id: ObjectID | null;
  text: string;
}

export interface Note {
  id?: string | null;
  text: string;
}
export interface AddNoteMutationArgs {
  text: string;
}
