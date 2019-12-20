
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Csv {
    rows?: Any[];
    total?: number;
}

export abstract class IQuery {
    abstract getRows(page: number, limit: number): Csv | Promise<Csv>;
}

export type Any = any;
