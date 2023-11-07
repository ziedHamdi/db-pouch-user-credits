import {IOffer, OfferCycle} from "user-credits";

import {BaseEntity} from "./BaseEntity";

export class Offer extends BaseEntity implements IOffer<string> {
    private _customCycle: number | null;
    private _cycle: OfferCycle;
    private _hasDependentOffers: boolean;
    private _kind: "subscription" | "tokens" | "expertise";
    private _name: string;
    private _offerGroup: string;
    private _overridingKey: string;
    private _popular: number;
    private _price: number;
    private _quantityLimit: number | null;
    private _tags: string[];
    private _tokenCount: number | null;
    private _unlockedBy: string[];
    private _weight: number;

    get customCycle(): number | null {
        return this._customCycle;
    }

    set customCycle(value: number | null) {
        this._customCycle = value;
    }

    get cycle(): OfferCycle {
        return this._cycle;
    }

    set cycle(value: OfferCycle) {
        this._cycle = value;
    }

    get hasDependentOffers(): boolean {
        return this._hasDependentOffers;
    }

    set hasDependentOffers(value: boolean) {
        this._hasDependentOffers = value;
    }

    get kind(): "subscription" | "tokens" | "expertise" {
        return this._kind;
    }

    set kind(value: "subscription" | "tokens" | "expertise") {
        this._kind = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get offerGroup(): string {
        return this._offerGroup;
    }

    set offerGroup(value: string) {
        this._offerGroup = value;
    }

    get overridingKey(): string {
        return this._overridingKey;
    }

    set overridingKey(value: string) {
        this._overridingKey = value;
    }

    get popular(): number {
        return this._popular;
    }

    set popular(value: number) {
        this._popular = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantityLimit(): number | null {
        return this._quantityLimit;
    }

    set quantityLimit(value: number | null) {
        this._quantityLimit = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }

    get tokenCount(): number | null {
        return this._tokenCount;
    }

    set tokenCount(value: number | null) {
        this._tokenCount = value;
    }

    get unlockedBy(): string[] {
        return this._unlockedBy;
    }

    set unlockedBy(value: string[]) {
        this._unlockedBy = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOfferGroups(offerGroups: string[], reset?: boolean): string[] {
        return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    asUnlockingOffers(dependsOnOffers: IOffer<string>[], reset?: boolean): string[] {
        return [];
    }

}