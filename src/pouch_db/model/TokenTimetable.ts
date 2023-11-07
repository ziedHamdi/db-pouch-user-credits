import {BaseEntity} from "./BaseEntity";
import {ITokenTimetable} from "user-credits";

export class TokenTimetable extends BaseEntity implements ITokenTimetable<string> {
    createdAt: Date;
    tokens: number;
    userId: string;
}