import * as bcrypt from "bcryptjs";

import { MutationResolvers } from "../../../resolverTypes";
import { UserModel } from "../../../models/User";
import { UserDbObject } from "../../../modelTypes";

const resolvers: {
  Mutation: { register: MutationResolvers.RegisterResolver<UserDbObject> };
} = {
  Mutation: {
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return new UserModel({ username, password: hashedPassword }).save();
    }
  }
};

export default resolvers;
