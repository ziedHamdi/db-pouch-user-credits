import {ITokenTimetable} from "user-credits";

import {BaseEntity} from "./BaseEntity";

export class TokenTimetable extends BaseEntity implements ITokenTimetable<string> {
    private _createdAt: Date;
    private _tokens: number;
    private _userId: string;

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get tokens(): number {
        return this._tokens;
    }

    set tokens(value: number) {
        this._tokens = value;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

}