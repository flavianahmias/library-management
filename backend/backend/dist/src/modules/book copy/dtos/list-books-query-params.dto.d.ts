import { BookStatusEnum } from '../enums/book-status.enum';
import { SortOrderEnum } from 'src/shared/types.ts/types';
import { OrderByEnum } from '../types/types';
export declare class ListBooksQueryParamsDTO {
    page: number;
    pageSize: number;
    status: BookStatusEnum;
    name: string;
    author: string;
    value: number;
    orderBy?: OrderByEnum;
    sort?: SortOrderEnum;
}
