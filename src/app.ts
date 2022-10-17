import express, { Application, Request, Response, NextFunction, Router } from 'express';
import { config } from 'dotenv';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { connect, connection } from 'mongoose';
import { cityRouter } from './routes/city.route';

config();

const app: Application = express();

/* Mongo DB */
const mongoString: string = process.env.MONGO_DB_URL || 'point to localhost or default url';
connect(mongoString);
const database = connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
/* */

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Error handler middleware */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ "message": "Express server with TypeScript" });
});

/* Routes */
export const router = Router();
router.use('/api/v1/cities', cityRouter);
app.use(router);
/** */

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
