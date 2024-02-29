import { Request, Response, NextFunction } from 'express';

import _Ajv, { Schema } from 'ajv';

import _addFormats from 'ajv-formats';

import { ValidationError } from '../Errors/index.js';

import { SuccessStatusCodes } from '../Types/index.js';

const Ajv = _Ajv as unknown as typeof _Ajv.default;

const addFormats = _addFormats as unknown as typeof _addFormats.default;

const ajv = new Ajv({ allErrors: true });

addFormats(ajv);

type ValidationSchema = {
    [key in keyof Request]?: Schema;
};

type CookieData = {
    name: string;
    payload: string;
};

export class BaseController {
    protected readonly validationSchema: ValidationSchema | null = null;

    protected readonly statusCode: SuccessStatusCodes =
        SuccessStatusCodes.success;

    protected cookie: CookieData;

    protected controller = async (
        _req: Request //eslint-disable-line
    ): Promise<unknown | void> => {
        throw new SyntaxError('Method Controller required');
    };

    private handleValidation = (
        req: Request,
        key: keyof Request,
        schema: Schema
    ) => {
        const validator = ajv.compile(schema);

        const isValid = validator(req[key as keyof Request]);

        if (isValid) {
            return null;
        }

        const errors = validator.errors?.map(({ message }) => ({ message }));

        return { [key]: errors };
    };

    private validate = (req: Request) => {
        const validationOptions = Object.entries(
            this.validationSchema as ValidationSchema
        );

        const errorsData = validationOptions.reduce((acc, current) => {
            const [key, schema] = current;

            const errorData = this.handleValidation(
                req,
                key as keyof Request,
                schema
            );

            return errorData ? { ...acc, ...errorData } : acc;
        }, {});

        if (Object.keys(errorsData).length > 0) {
            throw new ValidationError('Validation error', errorsData);
        }
    };

    private setCookies = (res: Response): void => {
        res.cookie(this.cookie.name, this.cookie.payload, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
    };

    public run = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            if (this.validationSchema) {
                this.validate(req);
            }

            const result = await this.controller(req);

            if (this.cookie) {
                this.setCookies(res);
            }

            res.status(this.statusCode).send(result);
        } catch (error) {
            return next(error);
        }
    };
}
