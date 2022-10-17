import { Router } from 'express';
import * as cityController from '../controllers/city.controller';

export const cityRouter = Router();

cityRouter.get('/', cityController.getAll);
cityRouter.get('/:id', cityController.getById);
cityRouter.post('/', cityController.insert);
cityRouter.put('/:id', cityController.update);