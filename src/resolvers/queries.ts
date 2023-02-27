import { GraphQLError } from 'graphql';
import { QueryResolvers, UserRole } from '../__generated__/resolvers-types';
import * as jwt from 'jsonwebtoken';
import { config } from '../utils/config';
import { validateUserRole } from '../utils/validate-user-role';

export const queries: QueryResolvers = {
  accessToken: async (_, args, contextValue) => {
    const user = await contextValue.db.user.getOneByRole(args.dto.role);
    if (!user || user.password !== args.dto.password) {
      throw new GraphQLError('Invalid credentials.');
    }
    return jwt.sign({ sub: user.id }, config.JWT_SECRET);
  },
  users: async (_, __, contextValue) => {
    return contextValue.db.user.getAll();
  },
  vegetables: async (_, __, contextValue) => {
    validateUserRole(contextValue.user, [
      UserRole.Admin,
      UserRole.VegetarianMary,
    ]);
    return contextValue.db.vegetable.getAll();
  },
  fruits: async (_, __, contextValue) => {
    validateUserRole(contextValue.user, [UserRole.Admin, UserRole.FruitJohn]);
    return contextValue.db.fruit.getAll();
  },
  vegetable: async (_, args, contextValue) => {
    validateUserRole(contextValue.user, [
      UserRole.Admin,
      UserRole.VegetarianMary,
    ]);
    return contextValue.db.vegetable.getOne(args.id);
  },
  fruit: async (_, args, contextValue) => {
    validateUserRole(contextValue.user, [UserRole.Admin, UserRole.FruitJohn]);
    return contextValue.db.fruit.getOne(args.id);
  },
};
