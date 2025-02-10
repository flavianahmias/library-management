import {
  History as HistoryEntity,
  Book as BookEntity,
  User as UserEntity,
} from '@prisma/client';
import { HistoryDTO } from '../dtos/history.dto';
import { History } from '../domain/history';
import { UserMapper } from 'src/modules/user/mappers/user-mapper';
import { BookMapper } from 'src/modules/book/mappers/book-mapper';

export class HistoryMapper {
  static toDomain(
    raw: HistoryEntity & {
      book: BookEntity;
      user: UserEntity;
    },
  ): History {
    return History.create(
      {
        type: raw.type,
        user: UserMapper.toDomain(raw.user),
        book: BookMapper.toDomain(raw.book),
      },
      {
        id: raw.id,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
    );
  }

  static toDTO(d: History): HistoryDTO {
    return {
      id: d.id as number,
      type: d.type,
      user: UserMapper.toDTO(d.user),
      book: BookMapper.toDTO(d.book),
      createdAt: d.createdAt,
      updatedAt: d.updatedAt,
    };
  }
}
