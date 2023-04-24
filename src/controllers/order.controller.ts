import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getAll(req: Request, res:Response) {
  const result = await orderService.getAll();
  res.status(200).json(result);
}

export default {
  getAll,
};