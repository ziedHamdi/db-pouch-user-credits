import {ITokenTimetableDao} from "@user-credits/core";
import * as PouchDB from 'pouchdb';

import {TokenTimetable} from "../model";
import {BasePouchDao} from "./BasePouchDao";

export class TokenTimetableDao extends BasePouchDao<TokenTimetable> implements ITokenTimetableDao<string, TokenTimetable> {
    constructor(
        protected db: PouchDB.Database
    ) {
        super(db, "tokenTimetable");
    }

}