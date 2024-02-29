import { Request, Response, NextFunction } from 'express';

import { BaseError } from '../Classes/index.js';

import { ErrorsStatusCodes } from '../Types/index.js';

export const ErrorsMiddleware = (
    err: unknown,
    req: Request,
    res: Response,
    _next: NextFunction //eslint-disable-line
) => {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).send(err.toObject());
    }

    return res.status(ErrorsStatusCodes.default).send('Technical error');
};
