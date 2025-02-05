import { ApiProperty } from '@nestjs/swagger';
import { BookStatusEnum } from '../enums/book-status.enum';
import { Book } from '../domain/book';
import { IsNumber, IsString } from 'class-validator';

export class CreateBookDTO {
  @ApiProperty({ enum: BookStatusEnum })
  status: BookStatusEnum;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsNumber()
  value: number;
}
