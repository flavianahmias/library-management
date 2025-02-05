import { Inject, Injectable } from '@nestjs/common';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';

type Input = { bookId: number };

@Injectable()
export class GetBookService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(input: Input) {
    const result = await this.bookRepo.findOne({
      id: { equals: input.bookId },
    });

    return result;
  }
}
