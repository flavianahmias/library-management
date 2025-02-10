import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { BookStatusEnum } from '../enums/book-status.enum';
interface BookProps {
    status: BookStatusEnum;
    name: string;
    author: string;
    value: number;
    history?: [];
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
}
export {};
