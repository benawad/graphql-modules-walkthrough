import * as bcrypt from "bcryptjs";

import { MutationResolvers } from "../../../resolverTypes";
import { UserModel } from "../../../models/User";
import { UserDbObject } from "../../../modelTypes";

const resolvers: {
  Mutation: { login: MutationResolvers.LoginResolver<UserDbObject | null> };
} = {
  Mutation: {
    login: async (_, { username, password }, { req }) => {
      const user = await UserModel.findOne({
        username
      });
      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return null;
      }

      req.session.userId = user._id.toHexString();

      return user;
    }
  }
};

export default resolvers;
