import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from './csv.service';

describe('CsvService', () => {
  let service: CsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvService],
    }).compile();

    service = module.get<CsvService>(CsvService);
  });

  it('fetch data', async () => {
    const res = await service.findAll(1, 10);
    expect(res.total).toBe(10000);
  });
});
