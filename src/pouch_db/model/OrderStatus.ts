import {IOrderStatus} from "user-credits";

export class OrderStatus implements IOrderStatus {
    protected _date: Date;
    protected _message: string;
    protected _status: "pending" | "paid" | "refused" | "error";

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get status(): "pending" | "paid" | "refused" | "error" {
        return this._status;
    }

    set status(value: "pending" | "paid" | "refused" | "error") {
        this._status = value;
    }


}