import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
type Input = {
    bookId: number;
    userName: string;
};
export declare class ReturnBookService {
    private readonly bookRepo;
    constructor(bookRepo: IBookRepo);
    execute(input: Input): Promise<import("../../domain/book").Book>;
}
export {};
