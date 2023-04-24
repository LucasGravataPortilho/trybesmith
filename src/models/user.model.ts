import { ResultSetHeader } from 'mysql2';
import { User } from '../types/user';
import connection from './connection';

async function create(user: User): Promise<User> {
  const [row] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );

  const created = {
    id: row.insertId,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
    password: user.password,
  };

  return created;
}

export default {
  create,
};