import { ApiProperty } from '@nestjs/swagger';
import { BookStatusEnum } from '../enums/book-status.enum';
import { IsNumber, IsString } from 'class-validator';
import { CreateBookDTO } from './create-book.dto';

export class EditBookDTO extends CreateBookDTO {}
