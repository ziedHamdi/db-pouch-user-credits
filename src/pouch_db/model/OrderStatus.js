"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
class OrderStatus {
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
exports.OrderStatus = OrderStatus;
