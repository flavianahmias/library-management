import { Test, TestingModule } from '@nestjs/testing';
import { ListBooksController } from './list-books.controller';

describe('ListBooksController', () => {
  let controller: ListBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListBooksController],
    }).compile();

    controller = module.get<ListBooksController>(ListBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
