import { History as HistoryEntity, Book as BookEntity, User as UserEntity } from '@prisma/client';
import { HistoryDTO } from '../dtos/history.dto';
import { History } from '../domain/history';
export declare class HistoryMapper {
    static toDomain(raw: HistoryEntity & {
        book: BookEntity;
        user: UserEntity;
    }): History;
    static toDTO(d: History): HistoryDTO;
}
