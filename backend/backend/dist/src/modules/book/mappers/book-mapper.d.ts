import { Book as BookEntity, History as HistoryEntity } from '@prisma/client';
import { Book } from '../domain/book';
import { BookDTO } from '../dtos/book.dto';
export declare class BookMapper {
    static toDomain(raw: BookEntity & {
        history?: HistoryEntity[];
    }): Book;
    static toDTO(d: Book): BookDTO;
}
