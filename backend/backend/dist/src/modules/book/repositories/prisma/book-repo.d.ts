import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Book } from '../../domain/book';
import { IBookRepo } from '../interfaces/book-repo.interface';
import { FindAllBooksOptions } from '../../types/types';
export declare class BookRepoService implements IBookRepo {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(data: Book): Promise<Book>;
    findOne(where: Prisma.BookWhereInput): Promise<Book>;
    findAll(options: FindAllBooksOptions): Promise<{
        total: number;
        data: Book[];
    }>;
    update(data: Book): Promise<Book>;
}
