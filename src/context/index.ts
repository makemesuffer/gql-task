import { User } from '@prisma/client';
import { Db, db } from '../db';
import * as jwt from 'jsonwebtoken';
import { config } from '../utils/config';

export interface MyContext {
  db: Db;
  user: User | null;
}

export async function getMyContext(authorization?: string): Promise<MyContext> {
  const myContext = {
    db,
    user: null,
  };
  const token = authorization?.split(' ')[1] as string | undefined;
  if (!authorization || !token) {
    return myContext;
  }
  const isTokenValid = jwt.verify(token, config.JWT_SECRET, {
    ignoreExpiration: true,
  });
  const payload = jwt.decode(token, { json: true });
  if (!isTokenValid || !payload || !payload.sub) {
    return myContext;
  }
  const user = await db.user.getOne(payload.sub);
  console.log(user);
  return { ...myContext, user: user };
}
