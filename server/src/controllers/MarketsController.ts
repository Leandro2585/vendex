import { Request, Response } from 'express';
import Market from '../models/Market';
import Product from '../models/Product';

class MarketsController {
  public async index(request: Request, response: Response) {
      const markets = await Market.find();

      response.json({ markets });
  }

  public async show(request: Request, response: Response) {
      const { id } = request.params;

      const market = await Market.findById(id);

      let products = await Product.find({
        market_id: market._id
      });

      response.json({ market: { ...market._doc, products } });
  }
}

export default MarketsController;
