import { MutationResolvers, UserRole } from '../__generated__/resolvers-types';
import { validateUserRole } from '../utils/validate-user-role';
import { mutationResponses } from '../utils/mutation-responses';

export const mutations: MutationResolvers = {
  async createFruit(_, args, contextValue) {
    validateUserRole(contextValue.user);
    const fruit = await contextValue.db.fruit.create({ title: args.title });
    return {
      ...mutationResponses.created('fruit'),
      fruit,
    };
  },
  async createVegetable(_, args, contextValue) {
    validateUserRole(contextValue.user);
    const vegetable = await contextValue.db.vegetable.create({
      title: args.title,
    });
    return {
      ...mutationResponses.created('vegetable'),
      vegetable,
    };
  },

  async changeFruit(_, args, contextValue) {
    validateUserRole(contextValue.user, [UserRole.Admin, UserRole.FruitJohn]);
    const fruit = await contextValue.db.fruit.change(args.id, {
      title: args.title,
    });
    return {
      ...mutationResponses.changed('fruit'),
      fruit,
    };
  },
  async changeVegetable(_, args, contextValue) {
    validateUserRole(contextValue.user, [
      UserRole.Admin,
      UserRole.VegetarianMary,
    ]);
    const vegetable = await contextValue.db.vegetable.change(args.id, {
      title: args.title,
    });
    return {
      ...mutationResponses.changed('vegetable'),
      vegetable,
    };
  },

  async deleteFruit(_, args, contextValue) {
    validateUserRole(contextValue.user, [UserRole.Admin, UserRole.FruitJohn]);
    const fruit = await contextValue.db.fruit.delete(args.id);
    return {
      ...mutationResponses.deleted('fruit'),
      fruit,
    };
  },
  async deleteVegetable(_, args, contextValue) {
    validateUserRole(contextValue.user, [
      UserRole.Admin,
      UserRole.VegetarianMary,
    ]);
    const vegetable = await contextValue.db.vegetable.delete(args.id);
    return {
      ...mutationResponses.deleted('vegetable'),
      vegetable,
    };
  },
};
