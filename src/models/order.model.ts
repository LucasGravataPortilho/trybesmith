import { RowDataPacket } from 'mysql2';
import { Order } from '../types/orders';
import connection from './connection';

async function getAll(): Promise<Order[]> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_Id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
     FROM Trybesmith.orders o
     INNER JOIN Trybesmith.users u
     ON o.user_id = u.id
     INNER JOIN Trybesmith.products p
     ON o.id = p.order_id
     GROUP BY o.id
    `,
  );

  return rows as Order[];
}

export default {
  getAll,
};