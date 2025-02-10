import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
type Input = {
    bookId: number;
};
export declare class GetBookService {
    private readonly bookRepo;
    constructor(bookRepo: IBookRepo);
    execute(input: Input): Promise<import("../../domain/book").Book>;
}
export {};
