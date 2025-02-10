import { ListBooksQueryParamsDTO } from '../../dtos/list-books-query-params.dto';
import { ListBooksService } from './list-books.service';
export declare class ListBooksController {
    private readonly service;
    constructor(service: ListBooksService);
    execute(query: ListBooksQueryParamsDTO): Promise<{
        data: import("../../dtos/book.dto").BookDTO[];
        total: number;
    }>;
}
