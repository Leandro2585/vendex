import '../database/mongoose';
import Market from '../models/Market';
import Product from '../models/Product';
import { createRecipient } from '../services/pagarme';
import markets from '../fakes/markets.json';

async function populateEntities() {
  try {
    for (let market of markets) {

      const recipient = await createRecipient(market.name);

      if(!recipient.error) {
        const newMarket = await new Market({
          ...market,
          recipient_id: recipient.data.id
        }).save();

        await Product.insertMany(
          market.product.map((item) => ({ ...item, market_id: newMarket.id })),
        );
      } else {
        console.log(recipient.message);
      }
    }
    console.log('seeds successfully executed');

  } catch (err) {
    console.log(err.message);
  }
}

populateEntities();
