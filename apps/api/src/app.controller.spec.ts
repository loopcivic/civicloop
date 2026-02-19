import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('should return health status', () => {
    const res = appController.health();

    expect(res).toHaveProperty('ok', true);
    expect(res).toHaveProperty('service', 'api');
    expect(res).toHaveProperty('ts');
  });
});
