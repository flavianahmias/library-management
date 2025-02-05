import { Inject, Injectable } from '@nestjs/common';
import { IBookRepo } from '../../repositories/interfaces/book-repo.interface';
import { ListBooksQueryParamsDTO } from '../../dtos/list-books-query-params.dto';

@Injectable()
export class ListBooksService {
  constructor(@Inject('IBookRepo') private readonly bookRepo: IBookRepo) {}

  async execute(input: ListBooksQueryParamsDTO) {
    const result = await this.bookRepo.findAll({
      page: input.page,
      pageSize: input.pageSize,
      name: input.name,
      status: input.status,
      author: input.author,
      value: input.value,
      orderBy: input.orderBy,
      sort: input.sort,
    });

    return result;
  }
}
