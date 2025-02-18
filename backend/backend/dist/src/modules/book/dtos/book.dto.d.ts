import { HistoryDTO } from 'src/modules/history/dtos/history.dto';
import { BookStatusEnum } from '../enums/book-status.enum';
export interface BookDTO {
    id: number;
    status: BookStatusEnum;
    name: string;
    author: string;
    value: number;
    createdAt: Date;
    updatedAt: Date;
    history?: HistoryDTO[];
}
