import {IUserCreditsDao} from "user-credits";

import {UserCredits} from "../model";
import {BasePouchDao} from "./BasePouchDao";

export class UserCreditsDao extends BasePouchDao<UserCredits> implements IUserCreditsDao<string, UserCredits> {
    constructor(
        protected db: PouchDB.Database
    ) {
        super(db, "user_credits");
    }

}