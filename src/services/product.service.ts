import productModel from '../models/product.model';
import { Product } from '../types/product';

async function getAll() {
  const products = await productModel.getAll();
  return products;
}

async function create(product: Product) {
  const result = await productModel.create(product);
  return result;
}

export default {
  getAll,
  create,
};