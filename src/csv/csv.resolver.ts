import { Resolver, Args, Query } from '@nestjs/graphql';
import { CsvService } from './csv.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Csv')
export class CsvResolver {
    constructor(private readonly csvService: CsvService) {}

    @Query()
    async getRows(
        @Args('page', ParseIntPipe) page: number,
        @Args('limit', ParseIntPipe) limit: number) {
            return await this.csvService.findAll(page, limit);
    }
}
