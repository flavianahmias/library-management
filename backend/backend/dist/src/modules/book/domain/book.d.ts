import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { BookStatusEnum } from '../enums/book-status.enum';
import { History } from 'src/modules/history/domain/history';
interface BookProps {
    status: BookStatusEnum;
    name: string;
    author: string;
    value: number;
    history?: History[];
}
export declare class Book extends Entity<BookProps> {
    private constructor();
    static create(props: BookProps, metadata?: EntityMetadata): Book;
    get name(): string;
    set name(value: string);
    get status(): BookStatusEnum;
    set status(value: BookStatusEnum);
    get author(): string;
    set author(value: string);
    get value(): number;
    set value(value: number);
    get history(): History[];
    set history(history: History[]);
}
export {};
