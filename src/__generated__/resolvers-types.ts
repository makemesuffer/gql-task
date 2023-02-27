import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../context/index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: string;
};

export type Fruit = {
  __typename?: 'Fruit';
  id: Scalars['UUID'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeFruit: MutationFruitResponse;
  changeVegetable: MutationVegetableResponse;
  createFruit: MutationFruitResponse;
  createVegetable: MutationVegetableResponse;
  deleteFruit: MutationFruitResponse;
  deleteVegetable: MutationVegetableResponse;
};


export type MutationChangeFruitArgs = {
  id: Scalars['UUID'];
  title: Scalars['String'];
};


export type MutationChangeVegetableArgs = {
  id: Scalars['UUID'];
  title: Scalars['String'];
};


export type MutationCreateFruitArgs = {
  title: Scalars['String'];
};


export type MutationCreateVegetableArgs = {
  title: Scalars['String'];
};


export type MutationDeleteFruitArgs = {
  id: Scalars['UUID'];
};


export type MutationDeleteVegetableArgs = {
  id: Scalars['UUID'];
};

export type MutationFruitResponse = MutationResponse & {
  __typename?: 'MutationFruitResponse';
  code: Scalars['String'];
  fruit: Fruit;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type MutationResponse = {
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type MutationVegetableResponse = MutationResponse & {
  __typename?: 'MutationVegetableResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  vegetable: Vegetable;
};

export type Query = {
  __typename?: 'Query';
  accessToken: Scalars['String'];
  fruit?: Maybe<Fruit>;
  fruits: Array<Fruit>;
  users: Array<User>;
  vegetable?: Maybe<Vegetable>;
  vegetables: Array<Vegetable>;
};


export type QueryAccessTokenArgs = {
  dto: UserCredentials;
};


export type QueryFruitArgs = {
  id: Scalars['UUID'];
};


export type QueryVegetableArgs = {
  id: Scalars['UUID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['UUID'];
  password: Scalars['String'];
  role: UserRole;
};

export type UserCredentials = {
  password: Scalars['String'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  FruitJohn = 'FRUIT_JOHN',
  VegetarianMary = 'VEGETARIAN_MARY'
}

export type Vegetable = {
  __typename?: 'Vegetable';
  id: Scalars['UUID'];
  title: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Fruit: ResolverTypeWrapper<Fruit>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationFruitResponse: ResolverTypeWrapper<MutationFruitResponse>;
  MutationResponse: ResolversTypes['MutationFruitResponse'] | ResolversTypes['MutationVegetableResponse'];
  MutationVegetableResponse: ResolverTypeWrapper<MutationVegetableResponse>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  User: ResolverTypeWrapper<User>;
  UserCredentials: UserCredentials;
  UserRole: UserRole;
  Vegetable: ResolverTypeWrapper<Vegetable>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Fruit: Fruit;
  Mutation: {};
  MutationFruitResponse: MutationFruitResponse;
  MutationResponse: ResolversParentTypes['MutationFruitResponse'] | ResolversParentTypes['MutationVegetableResponse'];
  MutationVegetableResponse: MutationVegetableResponse;
  Query: {};
  String: Scalars['String'];
  UUID: Scalars['UUID'];
  User: User;
  UserCredentials: UserCredentials;
  Vegetable: Vegetable;
}>;

export type FruitResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Fruit'] = ResolversParentTypes['Fruit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changeFruit?: Resolver<ResolversTypes['MutationFruitResponse'], ParentType, ContextType, RequireFields<MutationChangeFruitArgs, 'id' | 'title'>>;
  changeVegetable?: Resolver<ResolversTypes['MutationVegetableResponse'], ParentType, ContextType, RequireFields<MutationChangeVegetableArgs, 'id' | 'title'>>;
  createFruit?: Resolver<ResolversTypes['MutationFruitResponse'], ParentType, ContextType, RequireFields<MutationCreateFruitArgs, 'title'>>;
  createVegetable?: Resolver<ResolversTypes['MutationVegetableResponse'], ParentType, ContextType, RequireFields<MutationCreateVegetableArgs, 'title'>>;
  deleteFruit?: Resolver<ResolversTypes['MutationFruitResponse'], ParentType, ContextType, RequireFields<MutationDeleteFruitArgs, 'id'>>;
  deleteVegetable?: Resolver<ResolversTypes['MutationVegetableResponse'], ParentType, ContextType, RequireFields<MutationDeleteVegetableArgs, 'id'>>;
}>;

export type MutationFruitResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MutationFruitResponse'] = ResolversParentTypes['MutationFruitResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fruit?: Resolver<ResolversTypes['Fruit'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MutationFruitResponse' | 'MutationVegetableResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
}>;

export type MutationVegetableResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MutationVegetableResponse'] = ResolversParentTypes['MutationVegetableResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vegetable?: Resolver<ResolversTypes['Vegetable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryAccessTokenArgs, 'dto'>>;
  fruit?: Resolver<Maybe<ResolversTypes['Fruit']>, ParentType, ContextType, RequireFields<QueryFruitArgs, 'id'>>;
  fruits?: Resolver<Array<ResolversTypes['Fruit']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  vegetable?: Resolver<Maybe<ResolversTypes['Vegetable']>, ParentType, ContextType, RequireFields<QueryVegetableArgs, 'id'>>;
  vegetables?: Resolver<Array<ResolversTypes['Vegetable']>, ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VegetableResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Vegetable'] = ResolversParentTypes['Vegetable']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Fruit?: FruitResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationFruitResponse?: MutationFruitResponseResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  MutationVegetableResponse?: MutationVegetableResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Vegetable?: VegetableResolvers<ContextType>;
}>;

