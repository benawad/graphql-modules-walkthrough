import { IMiddleware, IMiddlewareFunction } from "graphql-middleware";

const isAuthenticated: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  ctx,
  info
) => {
  if (!ctx.req || !ctx.req.session || !ctx.req.session.userId) {
    throw new Error("not authenticated");
  }

  return resolve(parent, args, ctx, info);
};

export const middleware: IMiddleware = {
  Query: {
    note: isAuthenticated
  },
  Mutation: {
    addNote: isAuthenticated,
    shareNote: isAuthenticated
  }
};
