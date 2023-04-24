import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types/product';
import connection from './connection';

async function create(product: Product): Promise<Product> {
  const [row] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  
  const created = {
    id: row.insertId,
    name: product.name,
    amount: product.amount,
  };

  return created;
}

async function getAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return rows as Product[];
}

export default {
  getAll,
  create,
};