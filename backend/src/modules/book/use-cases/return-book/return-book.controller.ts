import {
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/user/use-cases/auth/jwt-auth.guard';
import { BookMapper } from '../../mappers/book-mapper';
import { RentBookService } from '../rent-book/rent-book.service';

@ApiTags('Book')
@ApiBearerAuth()
@Controller('book')
export class ReturnBookController {
  constructor(private readonly service: RentBookService) {}

  @UseGuards(JwtAuthGuard)
  @Patch('/:id/return')
  async execute(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const result = await this.service.execute({
      bookId: id,
      userName: req.user.name,
    });
    return { data: BookMapper.toDTO(result) };
  }
}
