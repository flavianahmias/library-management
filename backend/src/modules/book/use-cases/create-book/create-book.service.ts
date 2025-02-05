import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDTO } from '../../dtos/create-book.dto';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { Book } from '../../domain/book';

@Injectable()
export class CreateBookService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(body: CreateBookDTO) {
    const book = Book.create(body);
    const result = await this.bookRepo.save(book);
    return result;
  }
}
