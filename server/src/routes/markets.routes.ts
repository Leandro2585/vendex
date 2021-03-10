import { Router } from 'express';
import marketsController from '../controllers/MarketsController';

const marketsRouter = Router();

marketsRouter.get('/', marketsController.index);
marketsRouter.get('/:id', marketsController.show);

export default marketsRouter;
