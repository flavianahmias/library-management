import { Inject, Injectable } from '@nestjs/common';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { BookStatusEnum } from '../../enums/book-status.enum';

type Input = {
  bookId: number;
  userName: string;
};

@Injectable()
export class RentBookService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(input: Input) {
    const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });

    console.log(input.userName);
    book.status = BookStatusEnum.Rent;

    const result = await this.bookRepo.update(book);
    return result;
  }
}
