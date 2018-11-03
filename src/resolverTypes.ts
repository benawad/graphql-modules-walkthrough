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
  note?: Note | null;

  notes: Note[];

  me?: User | null;
}

export interface Note {
  id: string;

  text: string;

  ownerId: string;

  visible: boolean;
}

export interface User {
  id: string;

  username: string;

  notes: Note[];
}

export interface Mutation {
  addNote: Note;

  shareNote?: boolean | null;

  login?: User | null;

  register: User;
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

export interface NoteQueryArgs {
  id: string;
}
export interface AddNoteMutationArgs {
  text: string;

  visible?: boolean | null;
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

// ====================================================
// END: Typescript template
// ====================================================

// ====================================================
// Resolvers
// ====================================================

export namespace QueryResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    note?: NoteResolver<Note | null, TypeParent, Context>;

    notes?: NotesResolver<Note[], TypeParent, Context>;

    me?: MeResolver<User | null, TypeParent, Context>;
  }

  export type NoteResolver<
    R = Note | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, NoteArgs>;
  export interface NoteArgs {
    id: string;
  }

  export type NotesResolver<
    R = Note[],
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type MeResolver<
    R = User | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace NoteResolvers {
  export interface Resolvers<Context = any, TypeParent = Note> {
    id?: IdResolver<string, TypeParent, Context>;

    text?: TextResolver<string, TypeParent, Context>;

    ownerId?: OwnerIdResolver<string, TypeParent, Context>;

    visible?: VisibleResolver<boolean, TypeParent, Context>;
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
  export type OwnerIdResolver<
    R = string,
    Parent = Note,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VisibleResolver<
    R = boolean,
    Parent = Note,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = any, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;

    notes?: NotesResolver<Note[], TypeParent, Context>;
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
  export type NotesResolver<
    R = Note[],
    Parent = User,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any, TypeParent = never> {
    addNote?: AddNoteResolver<Note, TypeParent, Context>;

    shareNote?: ShareNoteResolver<boolean | null, TypeParent, Context>;

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

    visible?: boolean | null;
  }

  export type ShareNoteResolver<
    R = boolean | null,
    Parent = never,
    Context = any
  > = Resolver<R, Parent, Context, ShareNoteArgs>;
  export interface ShareNoteArgs {
    noteId: string;

    userId: string;

    scopes: string[];
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
