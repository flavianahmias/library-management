import { Test, TestingModule } from '@nestjs/testing';
import { GetBookController } from './get-book.controller';

describe('GetBookController', () => {
  let controller: GetBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetBookController],
    }).compile();

    controller = module.get<GetBookController>(GetBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
