import { Test, TestingModule } from '@nestjs/testing';
import { ReturnBookService } from './return-book.service';

describe('ReturnBookService', () => {
  let service: ReturnBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnBookService],
    }).compile();

    service = module.get<ReturnBookService>(ReturnBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
