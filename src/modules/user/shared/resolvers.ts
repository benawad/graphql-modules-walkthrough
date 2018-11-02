import { UserDbObject } from "../../../modelTypes";

export default {
  User: {
    id: ({ _id }: UserDbObject) => _id.toHexString()
  }
};
