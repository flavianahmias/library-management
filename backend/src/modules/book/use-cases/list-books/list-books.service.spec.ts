import { Test, TestingModule } from '@nestjs/testing';
import { ListBooksService } from './list-books.service';

describe('ListBooksService', () => {
  let service: ListBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListBooksService],
    }).compile();

    service = module.get<ListBooksService>(ListBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
