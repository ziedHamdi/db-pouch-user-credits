import {ITokenTimetable} from "@user-credits/core";

import {BaseEntity} from "./BaseEntity";

export class TokenTimetable extends BaseEntity implements ITokenTimetable<string> {
    constructor(id: string, createdAt: Date, tokens: number, userId: string) {
        super(id);
        this._createdAt = createdAt;
        this._tokens = tokens;
        this._userId = userId;
    }
    protected _createdAt: Date;
    protected _tokens: number;
    protected _userId: string;

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