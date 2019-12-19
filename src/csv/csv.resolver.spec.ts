import { Test, TestingModule } from '@nestjs/testing';
import { CsvResolver } from './csv.resolver';
import { CsvService } from './csv.service';

describe('CsvResolver', () => {
  let resolver: CsvResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvResolver, CsvService],
    }).compile();

    resolver = module.get<CsvResolver>(CsvResolver);
  });

  it('get Rows from resolver', async () => {
    const res = await resolver.getRows(1, 10);
    expect(res.total).toBe(10000);
  });
});
