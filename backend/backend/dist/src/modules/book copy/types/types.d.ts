import { SortOrderEnum } from 'src/shared/types.ts/types';
import { BookStatusEnum } from '../enums/book-status.enum';
export declare enum OrderByEnum {
    id = "id",
    createdAt = "createdAt"
}
export type FindAllBooksOptions = {
    page: number;
    pageSize: number;
    name?: string;
    status?: BookStatusEnum;
    orderBy?: OrderByEnum;
    sort?: SortOrderEnum;
    author?: string;
    value?: number;
};
