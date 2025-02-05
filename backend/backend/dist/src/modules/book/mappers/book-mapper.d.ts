import { Book as BookEntity } from '@prisma/client';
import { Book } from '../domain/book';
import { BookDTO } from '../dtos/book.dto';
export declare class BookMapper {
    static toDomain(raw: BookEntity): Book;
    static toDTO(d: Book): BookDTO;
}
