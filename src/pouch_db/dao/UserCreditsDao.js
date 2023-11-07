"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreditsDao = void 0;
const BasePouchDao_1 = require("./BasePouchDao");
class UserCreditsDao extends BasePouchDao_1.BasePouchDao {
    constructor(db) {
        super(db, "user_credits");
        this.db = db;
    }
}
exports.UserCreditsDao = UserCreditsDao;
