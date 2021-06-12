import Category from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private _categories: Category[];

  constructor() {
    this._categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category(name, description);

    this._categories.push(category);
  }

  list(): Category[] {
    return this._categories;
  }

  findByName(name: string): Category | undefined {
    const category = this._categories.find(
      (category) => category.name === name
    );

    return category;
  }
}

export default CategoryRepository;
