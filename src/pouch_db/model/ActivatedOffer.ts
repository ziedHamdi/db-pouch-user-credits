import {IActivatedOffer} from "user-credits";

export class ActivatedOffer implements IActivatedOffer {
    constructor(expires: Date, offerGroup: string, starts: Date, tokens: number) {
        this._expires = expires;
        this._offerGroup = offerGroup;
        this._starts = starts;
        this._tokens = tokens;
    }
    private _expires: Date;
    private _offerGroup: string;
    private _starts: Date;
    private _tokens: number;

    get expires(): Date {
        return this._expires;
    }

    set expires(value: Date) {
        this._expires = value;
    }

    get offerGroup(): string {
        return this._offerGroup;
    }

    set offerGroup(value: string) {
        this._offerGroup = value;
    }

    get starts(): Date {
        return this._starts;
    }

    set starts(value: Date) {
        this._starts = value;
    }

    get tokens(): number {
        return this._tokens;
    }

    set tokens(value: number) {
        this._tokens = value;
    }


}