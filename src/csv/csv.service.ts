import { Injectable, Logger } from '@nestjs/common';
import * as csv from 'csv-parse';
import { join } from 'path';
import { createReadStream } from 'fs';
@Injectable()
export class CsvService {

    async findAll(page: number, limit: number) {
        const rows: any[] = await new Promise((resolve, reject) => {
            const data = [];
            let index = 0;
            let columns = [];
            createReadStream(join(__dirname, '../..', '10000 Sales Records.csv')).pipe(csv())
                .on('data', row => {
                    if (index === 0) {
                        columns = columns.concat(row);
                        index++;
                    } else {
                        const newArr = [];
                        for (let i = 0; i < columns.length; i++) {
                            const newObj = {name: columns[i], value: row[i]};
                            newArr.push(newObj);
                        }
                        data.push({columns: newArr});
                    }
                }).on('end', () => {
                    resolve(data);
                }).on('error', (err) => reject(err));
        });
        const result = {
            rows: this.paginate(rows, page, limit),
            total: rows.length,
        };
        return result;
    }

    private paginate(array: any[], page: number, rows: number) {
        --page;
        return array.slice(page * rows, (page + 1) * rows);
    }
}
