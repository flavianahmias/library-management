import { GetBookService } from './get-book.service';
export declare class GetBookController {
    private readonly service;
    constructor(service: GetBookService);
    execute(id: number): Promise<{
        data: import("../../dtos/book.dto").BookDTO;
    }>;
}
