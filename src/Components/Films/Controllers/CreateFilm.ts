import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { SuccessStatusCodes } from '../../../Types/index.js';

import { createFilmService, findFilmService } from '../Services/index.js';

import { ConflictError } from '../../../Errors/index.js';

class CreateFilmController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            required: ['name', 'actors'],
            additionalProperties: false,
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 255 },
                actors: { type: 'array', items: { type: 'integer' } },
            },
        },
    };

    protected readonly statusCode: SuccessStatusCodes =
        SuccessStatusCodes.created;

    private checkNameConflict = async (name: string) => {
        const filmData = await findFilmService({ name });

        if (filmData) {
            throw new ConflictError('Film with that name already exist');
        }
    };

    protected controller = async (req: Request) => {
        const { name, actors } = req.body;

        await this.checkNameConflict(name);

        const filmData = await createFilmService(name, actors);

        return filmData;
    };
}

export const createFilmController = new CreateFilmController();
