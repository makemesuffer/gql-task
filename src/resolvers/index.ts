import { Resolvers } from '../__generated__/resolvers-types';
import { queries } from './queries';
import { mutations } from './mutations';
import { UUIDResolver } from 'graphql-scalars';

export const resolvers: Resolvers = {
  UUID: UUIDResolver,
  Query: queries,
  Mutation: mutations,
};
