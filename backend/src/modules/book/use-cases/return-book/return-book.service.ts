import { Inject, Injectable } from '@nestjs/common';
import { BookStatusEnum } from '../../enums/book-status.enum';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';

type Input = {
  bookId: number;
  userName: string;
};

@Injectable()
export class ReturnBookService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(input: Input) {
    const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });

    book.status = BookStatusEnum.Available;

    const result = await this.bookRepo.update(book);
    return result;
  }
}
