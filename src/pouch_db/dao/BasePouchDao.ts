import { IBaseDao } from "user-credits";

export class BasePouchDao<D extends object> implements IBaseDao<D> {
  constructor(
    protected db: PouchDB.Database,
    protected collection: string,
  ) {}

  build(entry: object): D {
    return entry as unknown as D;
  }

  async count(query: object): Promise<number> {
    try {
      const result = await this.db.query('your-design-document/count', {
        startkey: query,
        endkey: query,
      });
      return result.rows[0].value;
    } catch (error) {
      throw new Error(`Error counting documents: ${error.message}`);
    }
  }

  async create(data: Partial<D>): Promise<D> {
    try {
      const response = await this.db.put(data);
      return await this.findById(response.id) as D;
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }
  }

  async deleteById(id: string): Promise<boolean> {
    try {
      const doc = await this.findById(id);
      if (doc) {
        await this.db.remove(doc);
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(`Error deleting document: ${error.message}`);
    }
  }

  async find(query: object): Promise<D[]> {
    try {
      const result = await this.db.query('your-design-document/find', {
        startkey: query,
        endkey: query,
        include_docs: true,
      });
      return result.rows.map(row => row.doc as D);
    } catch (error) {
      throw new Error(`Error finding documents: ${error.message}`);
    }
  }

  async findById(id: object): Promise<D | null> {
    try {
      const doc = await this.db.get(id);
      return doc as D;
    } catch (error) {
      if (error.status === 404) {
        return null;
      } else {
        throw new Error(`Error finding document by ID: ${error.message}`);
      }
    }
  }

  async findOne(query: object): Promise<D | null> {
    try {
      const result = await this.db.query('your-design-document/find', {
        startkey: query,
        endkey: query,
        limit: 1,
        include_docs: true,
      });
      if (result.rows.length > 0) {
        return result.rows[0].doc as D;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Error finding one document: ${error.message}`);
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
      throw new Error(`Error updating document: ${error.message}`);
    }
  }
}
