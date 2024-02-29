import {
    Router as ExpressRouter,
    Request,
    Response,
    NextFunction,
} from 'express';

import ActorsRouter from './Components/Actors/Router.js';

import FilmsRouter from './Components/Films/Router.js';

import UsersRouter from './Components/Users/Router.js';

import { NotFoundError } from './Errors/index.js';

const Router = ExpressRouter();

Router.use('/api', FilmsRouter);

Router.use('/api', ActorsRouter);

Router.use('/api', UsersRouter);

Router.use((req: Request, res: Response, next: NextFunction) =>
    next(new NotFoundError())
);

export default Router;
