import { Module } from '@nestjs/common';
import { CsvService } from './csv.service';
import { CsvResolver } from './csv.resolver';

@Module({
  providers: [CsvService, CsvResolver],
})
export class CsvModule {}
