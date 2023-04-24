import userModel from '../models/user.model';
import { User } from '../types/user';

async function create(user: User) {
  const result = await userModel.create(user);
  return result;
}

export default {
  create,
};