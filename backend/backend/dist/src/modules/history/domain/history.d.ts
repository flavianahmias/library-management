import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { HistoryTypeEnum } from '../enums/history-type.enum';
import { User } from 'src/modules/user/domain/user';
import { Book } from 'src/modules/book/domain/book';
interface HistoryProps {
    type: HistoryTypeEnum;
    user: User;
    book: Book;
}
export declare class History extends Entity<HistoryProps> {
    private constructor();
    static create(props: HistoryProps, metadata?: EntityMetadata): History;
    get type(): HistoryTypeEnum;
    set type(value: HistoryTypeEnum);
    get user(): User;
    set user(value: User);
    get book(): Book;
    set book(book: Book);
}
export {};
