import { CreateBookDTO } from '../../dtos/create-book.dto';
import { CreateBookService } from './create-book.service';
export declare class CreateBookController {
    private readonly service;
    constructor(service: CreateBookService);
    execute(body: CreateBookDTO): Promise<{
        data: import("../../dtos/book.dto").BookDTO;
    }>;
}
