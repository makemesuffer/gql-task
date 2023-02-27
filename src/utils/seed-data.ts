import { User } from '@prisma/client';
import { UserRole } from '../__generated__/resolvers-types';

export const seedUsers: User[] = [
  {
    id: '4c07427f-2fe6-4310-aec5-77901b18e005',
    password: 'qwe',
    role: UserRole.Admin,
  },
  {
    id: '2259f34a-850f-4ce0-be06-bb5609fe8359',
    password: 'asd',
    role: UserRole.FruitJohn,
  },
  {
    id: '74638826-7c8a-43ee-81df-603085bc7d92',
    password: 'zxc',
    role: UserRole.VegetarianMary,
  },
];
