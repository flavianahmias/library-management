import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { IUserRepo } from 'src/modules/user/repositories/interfaces/user-repo.interface';
type Input = {
    bookId: number;
    userId: number;
};
export declare class RentBookService {
    private readonly bookRepo;
    private readonly userRepo;
    constructor(bookRepo: IBookRepo, userRepo: IUserRepo);
    execute(input: Input): Promise<import("../../domain/book").Book>;
}
export {};
