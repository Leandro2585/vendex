import { Router } from 'express';
import PurchaseController from '../controllers/PurchaseController';

const purchaseRouter = Router();

const purchaseController = new PurchaseController();

purchaseRouter.post('/', purchaseController.create);

export default purchaseRouter;
