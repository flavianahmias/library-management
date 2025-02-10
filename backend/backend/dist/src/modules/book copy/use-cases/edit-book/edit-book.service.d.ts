import { EditBookDTO } from '../../dtos/edit-book.dto';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
type Input = EditBookDTO & {
    bookId: number;
};
export declare class EditBookService {
    private readonly bookRepo;
    constructor(bookRepo: IBookRepo);
    execute(input: Input): Promise<import("../../domain/book").Book>;
}
export {};
