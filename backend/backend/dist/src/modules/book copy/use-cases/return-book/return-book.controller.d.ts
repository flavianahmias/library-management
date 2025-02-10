import { RentBookService } from '../rent-book/rent-book.service';
export declare class ReturnBookController {
    private readonly service;
    constructor(service: RentBookService);
    execute(id: number, req: any): Promise<{
        data: import("../../dtos/book.dto").BookDTO;
    }>;
}
