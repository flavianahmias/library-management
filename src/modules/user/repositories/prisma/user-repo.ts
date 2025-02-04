import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { User } from '../../domain/user';
import { UserMapper } from '../../mappers/user-mapper';
import { FindAllUsersOptions } from '../../types/types';
import { IUserRepo } from '../interfaces/user-repo.interface';

@Injectable()
export class UserRepoService implements IUserRepo {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(where: Prisma.UserWhereInput): Promise<User> {
    const result = await this.prisma.user.findFirst({
      where: where,
    });

    return result && UserMapper.toDomain(result);
  }

  async save(data: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        role: data.role,
        password: data.password,
        cpf: data.cpf,
        rg: data.rg,
        gender: data.gender,
        birthdate: data.birthdate,
      },
    });

    return result && UserMapper.toDomain(result);
  }

  async findAll(
    options: FindAllUsersOptions,
  ): Promise<{ total: number; data: User[] }> {
    const whereClause = { AND: [] };

    if (!!options.nameOrEmail) {
      whereClause.AND.push({
        OR: [
          {
            name: { contains: options.nameOrEmail },
          },
          {
            email: { contains: options.nameOrEmail },
          },
        ],
      });
    }
    if (!!options.role)
      whereClause.AND.push({ role: { equals: options.role } });

    if (typeof options.isActive !== 'undefined')
      whereClause.AND.push({ isActive: { equals: options.isActive } });

    const orderByClause = {
      role: { role: options.sort },
      createdAt: { createdAt: options.sort },
    };

    const skip = options.pageSize * (options.page - 1);
    const take = options.pageSize;
    const totalCount = await this.prisma.user.count({ where: whereClause });
    const data = await this.prisma.user.findMany({
      skip,
      take,
      where: whereClause,
      orderBy: orderByClause[options.orderBy],
    });

    return { total: totalCount, data: data.map(UserMapper.toDomain) };
  }

  async update(data: User): Promise<void> {
    await this.prisma.user.update({
      where: { id: data.id },
      data: {
        email: data.email,
        name: data.name,
        role: data.role,
        password: data.password,
        cpf: data.cpf,
        rg: data.rg,
        gender: data.gender,
        birthdate: data.birthdate,
      },
    });
  }

  async delete(data: User): Promise<void> {
    await this.prisma.user.delete({
      where: { id: data.id },
    });
  }
}
