import { Test, TestingModule } from '@nestjs/testing';
import { GetBookService } from './get-book.service';

describe('GetBookService', () => {
  let service: GetBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetBookService],
    }).compile();

    service = module.get<GetBookService>(GetBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
