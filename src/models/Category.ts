import { v4 as uuidv4 } from 'uuid';

class Category {
  private _id: string;
  private _name: string;
  private _description: string;
  private _created_at: Date;

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  constructor(name: string, description: string) {
    this._id = uuidv4();
    this._name = name;
    this._description = description;
    this._created_at = new Date();
  }
}

export default Category;
