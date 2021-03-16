import { Router } from 'express';
import MarketsController from '../controllers/MarketsController';

const marketsRouter = Router();
const marketsController = new MarketsController();

marketsRouter.get('/', marketsController.index);
marketsRouter.get('/:id', marketsController.show);

export default marketsRouter;
