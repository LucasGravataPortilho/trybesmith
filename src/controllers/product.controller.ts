import { Request, Response } from 'express';
import productService from '../services/product.service';

async function getAll(req: Request, res: Response) {
  const products = await productService.getAll();
  res.status(200).json(products);
}

async function create(req: Request, res: Response) {
  const product = req.body;
  const result = await productService.create(product);
  res.status(201).json(result);
}

export default {
  getAll,
  create,
};