import { Controller, Get, Query } from '@nestjs/common';
import { ListBooksQueryParamsDTO } from '../../dtos/list-books-query-params.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BookMapper } from '../../mappers/book-mapper';
import { ListBooksService } from './list-books.service';

@ApiBearerAuth()
@ApiTags('Book')
@Controller('book')
export class ListBooksController {
  constructor(private readonly service: ListBooksService) {}

  @Get()
  async execute(@Query() query: ListBooksQueryParamsDTO) {
    const result = await this.service.execute(query);
    return { ...result, data: result.data.map(BookMapper.toDTO) };
  }
}
