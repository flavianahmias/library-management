import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EditBookDTO } from '../../dtos/edit-book.dto';
import { EditBookService } from './edit-book.service';
import { BookMapper } from '../../mappers/book-mapper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';

@ApiBearerAuth()
@ApiTags('Book')
@Controller('book')
export class EditBookController {
  constructor(private readonly service: EditBookService) {}

  @Patch('/:id')
  async execute(
    @Body() body: EditBookDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const result = await this.service.execute({ ...body, bookId: id });
    return { data: BookMapper.toDTO(result) };
  }
}
