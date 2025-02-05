import { Inject, Injectable } from '@nestjs/common';
import { EditBookDTO } from '../../dtos/edit-book.dto';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';

type Input = EditBookDTO & { bookId: number };

@Injectable()
export class EditBookService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(input: Input) {
    const book = await this.bookRepo.findOne({ id: { equals: input.bookId } });
    book.author = input.author ?? book.author;
    book.value = input.value ?? book.value;
    book.name = input.name ?? book.name;
    book.status = input.status ?? book.status;
    const result = await this.bookRepo.update(book);
    return result;
  }
}
