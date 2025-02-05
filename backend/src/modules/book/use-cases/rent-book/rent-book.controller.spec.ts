import { Test, TestingModule } from '@nestjs/testing';
import { RentBookController } from './rent-book.controller';

describe('RentBookController', () => {
  let controller: RentBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentBookController],
    }).compile();

    controller = module.get<RentBookController>(RentBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
