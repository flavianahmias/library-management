import { Test, TestingModule } from '@nestjs/testing';
import { EditBookService } from './edit-book.service';

describe('EditBookService', () => {
  let service: EditBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditBookService],
    }).compile();

    service = module.get<EditBookService>(EditBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
