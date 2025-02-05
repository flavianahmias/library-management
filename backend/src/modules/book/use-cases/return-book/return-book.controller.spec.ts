import { Test, TestingModule } from '@nestjs/testing';
import { ReturnBookController } from './return-book.controller';

describe('ReturnBookController', () => {
  let controller: ReturnBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnBookController],
    }).compile();

    controller = module.get<ReturnBookController>(ReturnBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
