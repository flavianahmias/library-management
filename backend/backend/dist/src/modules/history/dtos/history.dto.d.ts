import { UserDTO } from 'src/modules/user/dtos/user.dto';
import { HistoryTypeEnum } from '../enums/history-type.enum';
import { BookDTO } from 'src/modules/book/dtos/book.dto';
export interface HistoryDTO {
    id: number;
    type: HistoryTypeEnum;
    user: UserDTO;
    book: BookDTO;
    createdAt: Date;
    updatedAt: Date;
}
