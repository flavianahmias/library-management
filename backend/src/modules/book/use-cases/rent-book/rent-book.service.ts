import { Inject, Injectable } from '@nestjs/common';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { BookStatusEnum } from '../../enums/book-status.enum';
import { IUserRepo } from 'src/modules/user/repositories/interfaces/user-repo.interface';
import { History } from 'src/modules/history/domain/history';
import { HistoryTypeEnum } from 'src/modules/history/enums/history-type.enum';

type Input = {
  bookId: number;
  userId: number;
};

@Injectable()
export class RentBookService {
  constructor(
    @Inject('IBookRepo') private readonly bookRepo: IBookRepo,
    @Inject('IUserRepo') private readonly userRepo: IUserRepo,
  ) {}

  async execute(input: Input) {
    const user = await this.userRepo.findOne({ id: { equals: input.userId } });

    const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });

    book.status = BookStatusEnum.Rent;
    book.history = [
      History.create({
        book: book,
        type: HistoryTypeEnum.Rented,
        user: user,
      }),
    ];

    const result = await this.bookRepo.update(book);
    return result;
  }
}
