import { ObjectID } from "mongodb";
import { Schema, model, Document } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, index: { unique: true } },
  password: String,
  notePermissions: [
    {
      permissions: [String],
      _noteId: { type: Schema.Types.ObjectId, ref: "Note" }
    }
  ]
});

interface UserModelType extends Document {
  _id: ObjectID;
  username: string;
  password: string;
  notePermissions: Array<{
    scopes: string[];
    _noteId: ObjectID;
  }>;
}

export const UserModel = model<UserModelType>("User", UserSchema);
