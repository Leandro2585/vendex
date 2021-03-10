import { Request, Response } from 'express';
import Market from '../models/Market';
import Product from '../models/Product';

class MarketsController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const markets = await Market.find();

      response.json({  error: false, markets });
    } catch (err) {
      response.json({ error: true, message: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {

      const { id } = request.params;

      const market = await Market.findById(id);

      let products = await Product.find({
        market_id: market._id
      });

      response.json({  error: false, market: { ...market._doc, products } });
    } catch (err) {
      response.json({ error: true, message: err.message });
    }
  }
}

export default new MarketsController();
