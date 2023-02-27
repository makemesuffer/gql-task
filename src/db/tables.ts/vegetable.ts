import { PrismaClient, Vegetable } from '@prisma/client';

type CreateVegetableDto = Omit<Vegetable, 'id'>;
type ChangeVegetableDto = Partial<CreateVegetableDto>;

export class VegetableDb {
  constructor(private readonly prisma: PrismaClient) {}

  async getAll() {
    return this.prisma.vegetable.findMany();
  }

  async getOne(id: string) {
    return this.prisma.vegetable.findUnique({
      where: {
        id,
      },
    });
  }

  async create(dto: CreateVegetableDto) {
    return this.prisma.vegetable.create({
      data: dto,
    });
  }

  async change(id: string, dto: ChangeVegetableDto) {
    return this.prisma.vegetable.update({
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
