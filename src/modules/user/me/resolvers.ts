import { QueryResolvers } from "../../../resolverTypes";
import { UserModel } from "../../../models/User";
import { UserDbObject } from "../../../modelTypes";

const resolvers: {
  Query: { me: QueryResolvers.MeResolver<UserDbObject | null> };
} = {
  Query: {
    me: async (_, __, { req }) => {
      return UserModel.findById(req.session.userId);
    }
  }
};

export default resolvers;
