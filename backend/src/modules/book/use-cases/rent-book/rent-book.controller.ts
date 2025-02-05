import {
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BookMapper } from '../../mappers/book-mapper';
import { RentBookService } from './rent-book.service';
import { JwtAuthGuard } from 'src/modules/user/use-cases/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Book')
@ApiBearerAuth()
@Controller('book')
export class RentBookController {
  constructor(private readonly service: RentBookService) {}

  @UseGuards(JwtAuthGuard)
  @Patch('/:id/rent')
  async execute(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const result = await this.service.execute({
      bookId: id,
      userName: req.user.name,
    });
    return { data: BookMapper.toDTO(result) };
  }
}
