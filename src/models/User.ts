import { ObjectID } from "mongodb";
import { Schema, model, Document } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, index: { unique: true } },
  password: String
});

interface UserModelType extends Document {
  _id: ObjectID;
  username: string;
  password: string;
}

export const UserModel = model<UserModelType>("User", UserSchema);
