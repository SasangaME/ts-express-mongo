import { Request, Response, NextFunction } from 'express';
import * as cityService from '../services/city.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await cityService.findAll();
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const data = await cityService.findById(id);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export async function insert(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await cityService.insert(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export async function update(req: Request, res: Response, next: NextFunction) {
    try {
        console.log("cities udpate called");
        const id = req.params.id;
        const data = await cityService.update(id, req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
}