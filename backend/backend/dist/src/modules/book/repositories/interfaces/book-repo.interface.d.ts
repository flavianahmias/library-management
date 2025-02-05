import { Prisma } from '@prisma/client';
import { FindAllBooksOptions } from '../../types/types';
import { Book } from '../../domain/book';
export interface IBookRepo {
    save(data: Book): Promise<Book>;
    findOne(where: Prisma.BookWhereInput): Promise<Book>;
    findAll(options: FindAllBooksOptions): Promise<{
        total: number;
        data: Book[];
    }>;
    update(data: Book): Promise<Book>;
}
