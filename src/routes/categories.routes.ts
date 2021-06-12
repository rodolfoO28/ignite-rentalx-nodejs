import { Router } from 'express';

import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists!' });
  }

  categoryRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

categoriesRoutes.get('/', (_, response) => {
  const categories = categoryRepository
    .list()
    .map(({ id, name, description }) => ({
      id,
      name,
      description,
    }));

  return response.json(categories);
});

export default categoriesRoutes;
