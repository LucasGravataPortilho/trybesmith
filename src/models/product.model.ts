import { RowDataPacket } from 'mysql2';
import { Product } from '../types/product';
import connection from './connection';

async function getAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM products');
  return rows as Product[];
}

export default {
  getAll,
};