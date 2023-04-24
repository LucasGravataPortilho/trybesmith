import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service';

const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};
  
const secret = process.env.JWT_SECRET || 'secret';

async function create(req: Request, res: Response) {
  const user = req.body;
  const result = await userService.create(user);
  const token = jwt.sign({ result }, secret, config);
  res.status(201).json({ token });
}

export default {
  create,
};