
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Column {
    name?: string;
    value?: string;
}

export abstract class IQuery {
    abstract getRows(page: number, limit: number): Result | Promise<Result>;
}

export class Result {
    rows?: Row[];
    total?: number;
}

export class Row {
    columns?: Column[];
}
