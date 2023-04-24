import productModel from '../models/product.model';

async function getAll() {
  const products = await productModel.getAll();
  return products;
}

export default {
  getAll,
};