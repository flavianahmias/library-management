import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BookMapper } from '../../mappers/book-mapper';
import { GetBookService } from './get-book.service';

@ApiBearerAuth()
@ApiTags('Book')
@Controller('book')
export class GetBookController {
  constructor(private readonly service: GetBookService) {}

  @Get('/:id')
  async execute(@Param('id', ParseIntPipe) id: number) {
    const result = await this.service.execute({ bookId: id });
    return { data: BookMapper.toDTO(result) };
  }
}
