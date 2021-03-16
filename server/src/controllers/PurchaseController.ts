import { Request, Response } from 'express';
import { createSplitTransaction } from '../services/pagarme';

class PurchaseController {
  public async create(request: Request, response: Response) {
      const data = request.body;
      const transaction = await createSplitTransaction(data);
      response.json(transaction);
  }
}

export default PurchaseController;
