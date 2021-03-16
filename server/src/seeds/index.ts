import '../database/mongoose';
import Market from '../models/Market';
import Product from '../models/Product';
import { createRecipient } from '../services/pagarme';
import markets from '../fakes/markets';
import { uuid } from 'uuidv4';

async function populateEntities() {
  try {
    console.log(markets);
    for (let market of markets) {
      const newMarket = await new Market({
        ...market,
        recipient_id: uuid()
      }).save();

      await Product.insertMany(
        market.product.map((item) => ({ ...item, market_id: newMarket.id })),
      );

      // const recipient = await createRecipient(market.name);
      //
      // if(!recipient.error) {

      //
      // } else {
      //   console.log(recipient.message);
      // }
    }
    console.log('seeds successfully executed');

  } catch (err) {
    console.log(err.message);
  }
}

populateEntities();
