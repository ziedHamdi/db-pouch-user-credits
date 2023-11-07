"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTimetable = void 0;
const BaseEntity_1 = require("./BaseEntity");
class TokenTimetable extends BaseEntity_1.BaseEntity {
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get tokens() {
        return this._tokens;
    }
    set tokens(value) {
        this._tokens = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
}
exports.TokenTimetable = TokenTimetable;
