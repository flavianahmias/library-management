import { ApiProperty } from '@nestjs/swagger';
import { BookStatusEnum } from '../enums/book-status.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SortOrderEnum } from 'src/shared/types.ts/types';
import { OrderByEnum } from '../types/types';

export class ListBooksQueryParamsDTO {
  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  page: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @Max(50)
  pageSize: number;

  @ApiProperty({
    enum: BookStatusEnum,
  })
  @IsOptional()
  @IsEnum(BookStatusEnum)
  status: BookStatusEnum;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  author: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  value: number;

  @ApiProperty({ enum: OrderByEnum })
  @IsOptional()
  @IsEnum(OrderByEnum)
  orderBy?: OrderByEnum;

  @ApiProperty({ enum: SortOrderEnum })
  @IsEnum(SortOrderEnum)
  @IsOptional()
  sort?: SortOrderEnum;
}
