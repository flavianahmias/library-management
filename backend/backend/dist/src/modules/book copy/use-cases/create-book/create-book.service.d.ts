import { CreateBookDTO } from '../../dtos/create-book.dto';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { Book } from '../../domain/book';
export declare class CreateBookService {
    private readonly bookRepo;
    constructor(bookRepo: IBookRepo);
    execute(body: CreateBookDTO): Promise<Book>;
}
