import { Book as BookEntity, History as HistoryEntity } from '@prisma/client';
import { Book } from '../domain/book';
import { BookDTO } from '../dtos/book.dto';
import { HistoryMapper } from 'src/modules/history/mappers/history-mapper';

export class BookMapper {
  static toDomain(
    raw: BookEntity & {
      history?: HistoryEntity[];
    },
  ): Book {
    return Book.create(
      {
        name: raw.name,
        status: raw.status,
        author: raw.author,
        value: raw.value,
        history: raw.history && raw.history.map(HistoryMapper.toDomain),
      },
      {
        id: raw.id,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
    );
  }

  static toDTO(d: Book): BookDTO {
    return {
      id: d.id as number,
      name: d.name,
      status: d.status,
      author: d.author,
      value: d.value,
      history: d.history && d.history.map(HistoryMapper.toDTO),
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    };
  }
}
