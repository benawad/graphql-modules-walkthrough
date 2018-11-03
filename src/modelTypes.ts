/* tslint:disable */
import { ObjectID } from "mongodb";

export interface AdditionalEntityFields {
  path?: string | null;
  type?: string | null;
}
export interface NoteQueryArgs {
  id: string;
}

export interface NoteDbObject {
  _id: ObjectID;
  text: string;
  _ownerId: ObjectID;
  visible: boolean;
}

export interface Note {
  id: string;
  text: string;
  ownerId: string;
  visible: boolean;
}
export interface UserDbObject {
  _id: ObjectID;
  username: string;
}

export interface User {
  id: string;
  username: string;
  notes: Note[];
}
export interface AddNoteMutationArgs {
  text: string;
  visible: boolean | null;
}

export interface ShareNoteMutationArgs {
  noteId: string;
  userId: string;
  scopes: string[];
}

export interface LoginMutationArgs {
  username: string;
  password: string;
}

export interface RegisterMutationArgs {
  username: string;
  password: string;
}
