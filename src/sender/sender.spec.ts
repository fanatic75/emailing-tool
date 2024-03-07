import { Test, TestingModule } from '@nestjs/testing';
import { Sender } from './sender';

describe('Sender', () => {
  let provider: Sender;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sender],
    }).compile();

    provider = module.get<Sender>(Sender);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
