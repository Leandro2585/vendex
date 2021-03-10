import mongoose from 'mongoose';

const URI = 'mongodb://localhost/vendex';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose
  .connect(URI)
  .then(() => console.log('Database is active'))
  .catch((err) => console.log(err));
