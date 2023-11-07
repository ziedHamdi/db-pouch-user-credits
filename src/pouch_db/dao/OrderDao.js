"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDao = void 0;
const BasePouchDao_1 = require("./BasePouchDao");
class OrderDao extends BasePouchDao_1.BasePouchDao {
    constructor(db) {
        super(db, "orders");
        this.db = db;
    }
}
exports.OrderDao = OrderDao;
