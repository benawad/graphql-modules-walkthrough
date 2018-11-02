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

export interface LoginMutationArgs {
  username: string;
  password: string;
}

export interface RegisterMutationArgs {
  username: string;
  password: string;
}

export interface UserDbObject {
  _id: ObjectID;
  username: string;
}

export interface User {
  id: string;
  username: string;
}
