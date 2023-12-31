import {IOrderDao} from "@user-credits/core";
import * as PouchDB from 'pouchdb';

import {Order} from "../model";
import {BasePouchDao} from "./BasePouchDao";

export class OrderDao extends BasePouchDao<Order> implements IOrderDao<string, Order> {
    constructor(
        protected db: PouchDB.Database
    ) {
        super(db, "orders");
    }
}