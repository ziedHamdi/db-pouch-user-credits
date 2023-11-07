import {IBaseEntity} from "user-credits";

export class BaseEntity implements IBaseEntity<string> {
    constructor(id: string) {
        this._id = id;
    }
    _id: string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    markModified(field: string): void {
    }

    save(): Promise<unknown> {
        return Promise.resolve(this._id);
    }
}