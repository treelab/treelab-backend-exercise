
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Column {
    name?: string;
    value?: string;
}

export class Csv {
    rows?: Row[];
    total?: number;
}

export abstract class IQuery {
    abstract getRows(page: number, limit: number, columnName?: string, sort?: string): Csv | Promise<Csv>;
}

export class Row {
    columns?: Column[];
}
