import { BookStatusEnum } from '../enums/book-status.enum';
export declare class CreateBookDTO {
    status: BookStatusEnum;
    name: string;
    author: string;
    value: number;
}
