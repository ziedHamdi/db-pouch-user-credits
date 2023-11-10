import type { IBaseDao } from "@user-credits/core";
import * as PouchDB from 'pouchdb';
// import * as pouchdbFind from 'pouchdb-find';
//
// PouchDB.plugin(pouchdbFind);

export class BasePouchDao<D extends object> implements IBaseDao<string, D> {
  constructor(
    protected db: PouchDB.Database,
    protected collection: string,
  ) {}

  build(entry: object): D {
    return entry as unknown as D;
  }

  async count(query: object): Promise<number> {
    try {
      const result = await this.db.query(this.collection+'/count', {
        endkey: query,
        startkey: query,
      });
      return result.rows[0].value;
    } catch (error) {
      throw new Error(`Error counting documents: ${(error as Error).message}`);
    }
  }

  async create(data: Partial<D>): Promise<D> {
    try {
      const response = await this.db.put(data);
      return await this.findById(response.id) as D;
    } catch (error) {
      throw new Error(`Error creating document: ${(error as Error).message}`);
    }
  }

  async deleteById(id: string): Promise<boolean> {
    type Removable = {_id:string, _rev:string}
    try {
      const doc = await this.findById(id);

      // Ensure that doc has _id and _rev properties
      if (doc) {
        await this.db.remove(doc as Removable);
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(`Error deleting document: ${(error as Error).message}`);
    }
  }

  async find(query: object): Promise<D[]> {
    try {
      const result = await this.db.query('your-design-document/find', {
        endkey: query,
        include_docs: true,
        startkey: query,
      });
      return result.rows.map(row => row.doc as D);
    } catch (error) {
      throw new Error(`Error finding documents: ${(error as Error).message}`);
    }
  }

  async findById(id: string): Promise<D | null> {
    try {
      const doc = await this.db.get(id);
      return doc as D;
    } catch (error) {
      // if ((error as PouchDB.Error).status === 404) {
      //   return null;
      // } else {
        throw new Error(`Error finding document by ID: ${(error as Error).message}`);
      // }
    }
  }

  async findOne(query: object): Promise<D | null> {
    try {
      const result = await this.db.query('your-design-document/find', {
        endkey: query,
        include_docs: true,
        limit: 1,
        startkey: query,
      });
      if (result.rows.length > 0) {
        return result.rows[0].doc as D;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error finding one document: ${(error as Error).message}`);
    }
  }

  async updateById(id: string, update: Partial<D>): Promise<D | null> {
    try {
      const doc = await this.findById(id);
      if (doc) {
        const updatedDoc = { ...doc, ...update };
        const response = await this.db.put(updatedDoc);
        return await this.findById(response.id) as D;
      }
      return null;
    } catch (error) {
      throw new Error(`Error updating document: ${((error as Error) as Error).message}`);
    }
  }
}
