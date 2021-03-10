import { Schema, model } from 'mongoose';

const Product = new Schema({
  market_id: {
    type: Schema.Types.ObjectId,
    ref: 'Market',
  },
  name: String,
  cover: String,
  price: Number,
  rating: Number,
});

export default model('Product', Product);
