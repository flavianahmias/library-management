import { Module } from '@nestjs/common';
import { CreateBookService } from './use-cases/create-book/create-book.service';
import { CreateBookController } from './use-cases/create-book/create-book.controller';
import { BookRepoService } from './repositories/prisma/book-repo';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { EditBookService } from './use-cases/edit-book/edit-book.service';
import { ListBooksService } from './use-cases/list-books/list-books.service';
import { GetBookService } from './use-cases/get-book/get-book.service';
import { GetBookController } from './use-cases/get-book/get-book.controller';
import { EditBookController } from './use-cases/edit-book/edit-book.controller';
import { ListBooksController } from './use-cases/list-books/list-books.controller';
import { RentBookService } from './use-cases/rent-book/rent-book.service';
import { RentBookController } from './use-cases/rent-book/rent-book.controller';
import { ReturnBookController } from './use-cases/return-book/return-book.controller';
import { ReturnBookService } from './use-cases/return-book/return-book.service';
import { UserRepoService } from '../user/repositories/prisma/user-repo';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [
    CreateBookService,
    BookRepoService,
    { provide: 'IBookRepo', useExisting: BookRepoService },
    UserRepoService,
    { provide: 'IUserRepo', useExisting: UserRepoService },
    EditBookService,
    ListBooksService,
    GetBookService,
    RentBookService,
    ReturnBookService,
  ],
  controllers: [
    CreateBookController,
    GetBookController,
    EditBookController,
    ListBooksController,
    RentBookController,
    ReturnBookController,
  ],
})
export class BookModule {}
