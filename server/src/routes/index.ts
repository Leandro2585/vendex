import { Router } from 'express';
import marketsRouter from './markets.routes';
import purchaseRouter from './purchase.routes';

const routes = Router();

routes.use('/markets', marketsRouter);
routes.use('/purchase', purchaseRouter);

export default routes;
