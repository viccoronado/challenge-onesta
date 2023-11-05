import { Client } from './client';
import { Field } from './field';
export declare class Farmer {
    [x: string]: any;
    id: number;
    name: string;
    age: number;
    fields: Field[];
    clients: Client[];
}
