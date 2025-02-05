import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateBookDTO } from '../../dtos/create-book.dto';
import { CreateBookService } from './create-book.service';
import { BookMapper } from '../../mappers/book-mapper';

@ApiBearerAuth()
@ApiTags('Book')
@Controller('book')
export class CreateBookController {
  constructor(private readonly service: CreateBookService) {}

  @Post()
  async execute(@Body() body: CreateBookDTO) {
    const result = await this.service.execute(body);
    return { data: BookMapper.toDTO(result) };
  }
}
