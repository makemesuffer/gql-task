import { PrismaClient, Fruit } from '@prisma/client';

type CreateFruitDto = Omit<Fruit, 'id'>;
type ChangeFruitDto = Partial<CreateFruitDto>;

export class FruitDb {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll() {
    return this.prisma.fruit.findMany();
  }

  async getOne(id: string) {
    return this.prisma.fruit.findUnique({
      where: {
        id,
      },
    });
  }

  async create(dto: CreateFruitDto) {
    return this.prisma.fruit.create({
      data: dto,
    });
  }

  async change(id: string, dto: ChangeFruitDto) {
    return this.prisma.fruit.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async delete(id: string) {
    return this.prisma.vegetable.delete({
      where: {
        id,
      },
    });
  }
}
