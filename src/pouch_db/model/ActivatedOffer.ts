import {IActivatedOffer} from "user-credits";

export class ActivatedOffer implements IActivatedOffer {
    expires: Date;
    offerGroup: string;
    starts: Date;
    tokens: number;

}