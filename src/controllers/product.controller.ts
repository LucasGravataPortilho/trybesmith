import { Request, Response } from 'express';
import productService from '../services/product.service';

async function getAll(req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}

export default {
  getAll,
};