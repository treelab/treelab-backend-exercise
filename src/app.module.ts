import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CsvModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    })],
})
export class AppModule {}
