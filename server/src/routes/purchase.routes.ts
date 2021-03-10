import { Router } from 'express';
import purchaseController from '../controllers/PurchaseController';
const purchaseRouter = Router();

purchaseRouter.post('/', purchaseController.create);

export default purchaseRouter;
