import { PrismaClient } from '@prisma/client';
import { VegetableDb } from './tables.ts/vegetable';
import { FruitDb } from './tables.ts/fruit';
import { UserDb } from './tables.ts/user';
import { seedUsers } from '../utils/seed-data';

export class Db {
  static prisma = new PrismaClient();
  static seedUsers = async () => {
    seedUsers.forEach(async (seedUser) => {
      await Db.prisma.user.create({
        data: seedUser,
      });
    });
  };

  vegetable = new VegetableDb(Db.prisma);
  fruit = new FruitDb(Db.prisma);
  user = new UserDb(Db.prisma);
}

Db.prisma
  .$connect()
  .then(() => console.log('Prisma connection was established.'))
  .then(async () => {
    const users = await Db.prisma.user.findMany();
    if (users.length === 3) return;
    return Db.seedUsers();
  })
  .catch(() => {
    console.log(`Prisma connection was failed.`);
    process.exit();
  });

export const db = new Db();
