import { Test, TestingModule } from '@nestjs/testing';
import { EditBookController } from './edit-book.controller';

describe('EditBookController', () => {
  let controller: EditBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditBookController],
    }).compile();

    controller = module.get<EditBookController>(EditBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
