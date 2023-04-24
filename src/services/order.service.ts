import orderModel from '../models/order.model';

async function getAll() {
  const result = await orderModel.getAll();
  return result;
}

export default {
  getAll,
};