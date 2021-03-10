import { Request, Response } from 'express';
import { createSplitTransaction } from '../services/pagarme';

class PurchaseController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const transaction = await createSplitTransaction(data);
      response.json(transaction);

    } catch (err) {
      response.json({ error: true, message: err.message });
    }
  }
}

export default new PurchaseController();
