import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { CreateBookController } from './modules/book/use-cases/create-book/create-book.controller';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
