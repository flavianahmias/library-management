import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Book } from '../../domain/book';
import { IBookRepo } from '../interfaces/book-repo.interface';
import { BookMapper } from '../../mappers/book-mapper';
import { FindAllBooksOptions } from '../../types/types';

@Injectable()
export class BookRepoService implements IBookRepo {
  constructor(private readonly prisma: PrismaService) {}

  async save(data: Book): Promise<Book> {
    const result = await this.prisma.book.create({
      data: {
        name: data.name,
        status: data.status,
        author: data.name,
        value: data.value,
      },
    });

    return result && BookMapper.toDomain(result);
  }

  async findOne(where: Prisma.BookWhereInput): Promise<Book> {
    const result = await this.prisma.book.findFirst({
      where: where,
    });

    return result && BookMapper.toDomain(result);
  }

  async findAll(
    options: FindAllBooksOptions,
  ): Promise<{ total: number; data: Book[] }> {
    const whereClause = { AND: [] };

    if (!!options.name) {
      whereClause.AND.push({ name: { contains: options.name } });
    }

    if (!!options.author) {
      whereClause.AND.push({ author: { contains: options.author } });
    }

    const orderByClause = {
      createdAt: { createdAt: options.sort },
    };

    console.log('⭕ Opções', options);
    const skip = options.pageSize * (options.page - 1);
    const take = options.pageSize;
    const totalCount = await this.prisma.book.count({ where: whereClause });
    const data = await this.prisma.book.findMany({
      skip,
      take,
      where: whereClause,
      orderBy: orderByClause[options.orderBy],
    });

    return { total: totalCount, data: data.map(BookMapper.toDomain) };
  }

  async update(data: Book): Promise<Book> {
    const result = await this.prisma.book.update({
      where: { id: data.id },
      data: {
        name: data.name,
        status: data.status,
        author: data.name,
        value: data.value,
      },
    });
    return result && BookMapper.toDomain(result);
  }
}
