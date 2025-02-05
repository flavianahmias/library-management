import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { ListBooksQueryParamsDTO } from '../../dtos/list-books-query-params.dto';
export declare class ListBooksService {
    private readonly bookRepo;
    constructor(bookRepo: IBookRepo);
    execute(input: ListBooksQueryParamsDTO): Promise<{
        total: number;
        data: import("../../domain/book").Book[];
    }>;
}
