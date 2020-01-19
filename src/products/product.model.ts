import * as mongoose  from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}
