import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';

export function validateUserRole(user: User | null, requiredRoles?: string[]) {
  if (!user) {
    throw new GraphQLError('Not logged in.', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: {
          status: 401,
        },
      },
    });
  }
  if (requiredRoles && !requiredRoles.includes(user.role)) {
    throw new GraphQLError('No required role.', {
      extensions: {
        code: 'FORBIDDEN',
        http: {
          status: 403,
        },
      },
    });
  }
}
