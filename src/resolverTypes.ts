/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = never> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = never
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  notes: Note[];
}

export interface Note {
  id: string;

  text: string;
}

export interface Mutation {
  addNote: Note;

  login?: User | null;

  register: User;
}

export interface User {
  id: string;

  username: string;
}

// ====================================================
// InputTypes
// ====================================================

export interface AdditionalEntityFields {
  path?: string | null;

  type?: string | null;
}

// ====================================================
// Arguments
// ====================================================

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

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Resolvers
// ====================================================

export namespace QueryResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    notes?: NotesResolver<Note[], TypeParent, Context>;
  }

  export type NotesResolver<
    R = Note[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace NoteResolvers {
  export interface Resolvers<Context = any, TypeParent = Note> {
    id?: IdResolver<string, TypeParent, Context>;

    text?: TextResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Note, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TextResolver<R = string, Parent = Note, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    addNote?: AddNoteResolver<Note, TypeParent, Context>;

    login?: LoginResolver<User | null, TypeParent, Context>;

    register?: RegisterResolver<User, TypeParent, Context>;
  }

  export type AddNoteResolver<
    R = Note,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, AddNoteArgs>;
  export interface AddNoteArgs {
    text: string;
  }

  export type LoginResolver<
    R = User | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    username: string;

    password: string;
  }

  export type RegisterResolver<
    R = User,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    username: string;

    password: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = User, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UsernameResolver<
    R = string,
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
}
