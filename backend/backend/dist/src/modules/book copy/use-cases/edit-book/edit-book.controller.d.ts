import { EditBookDTO } from '../../dtos/edit-book.dto';
import { EditBookService } from './edit-book.service';
export declare class EditBookController {
    private readonly service;
    constructor(service: EditBookService);
    execute(body: EditBookDTO, id: number): Promise<{
        data: import("../../dtos/book.dto").BookDTO;
    }>;
}
