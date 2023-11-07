"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTimetableDao = void 0;
const BasePouchDao_1 = require("./BasePouchDao");
class TokenTimetableDao extends BasePouchDao_1.BasePouchDao {
    constructor(db) {
        super(db, "tokenTimetable");
        this.db = db;
    }
}
exports.TokenTimetableDao = TokenTimetableDao;
