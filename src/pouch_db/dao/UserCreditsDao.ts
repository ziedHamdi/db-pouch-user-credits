import {IUserCredits, IUserCreditsDao} from "@user-credits/core";
import * as PouchDB from 'pouchdb';

import {UserCredits} from "../model";
import {BasePouchDao} from "./BasePouchDao";

export class UserCreditsDao extends BasePouchDao<UserCredits> implements IUserCreditsDao<string, UserCredits> {
    constructor(
        protected db: PouchDB.Database
    ) {
        super(db, "user_credits");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async findByUserId(userId: string): Promise<IUserCredits<string>> {
        return (await  this.find( {userId} ))?.[0] as unknown as UserCredits;
    }

}