import { PrismaClient } from '@prisma/client';
import { UserRole } from '../../__generated__/resolvers-types';

export class UserDb {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll() {
    return (
      this.prisma.user
        .findMany()
        // no enums in sqlite => type casting by hand
        .then(
          (users) =>
            users as unknown as {
              id: string;
              role: UserRole;
              password: string;
            }[]
        )
    );
  }

  async getOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getOneByRole(userRole: UserRole) {
    return this.prisma.user.findFirst({
      where: {
        role: userRole,
      },
    });
  }
}
