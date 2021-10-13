export interface Sheet {
    version: string;
    table: Table;
    status: string;
    sig: string;
    reqId: string;
}

interface Table {
    cols: any;
    rows: any;
}