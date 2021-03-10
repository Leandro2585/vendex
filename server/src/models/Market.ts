import { Schema, model } from 'mongoose';

const Market = new Schema({
  name: String,
  logo: String,
  category: String,
  emphasis: String,
  location: {
    lat: Number,
    lng: Number,
  },
  recipient_id: String,
});

export default model('Market', Market);
