import { Book as BookEntity } from '@prisma/client';
import { Book } from '../domain/book';
import { BookDTO } from '../dtos/book.dto';

export class BookMapper {
  static toDomain(raw: BookEntity): Book {
    return Book.create(
      {
        name: raw.name,
        status: raw.status,
        author: raw.author,
        value: raw.value,
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
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    };
  }
}
