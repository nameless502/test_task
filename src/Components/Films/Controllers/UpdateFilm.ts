import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { updateFilmService, findFilmService } from '../Services/index.js';

import { NotFoundError, ConflictError } from '../../../Errors/index.js';

class UpdateFilmController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            additionalProperties: false,
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 255 },
                actors: { type: 'array', items: { type: 'integer' } },
            },
        },
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                filmId: { type: 'string', pattern: '^\\d+$' },
            },
        },
    };

    private checkNameConflict = async (name?: string) => {
        if (!name) {
            return;
        }

        const filmData = await findFilmService({ name });

        if (filmData) {
            throw new ConflictError('Film with that name already exist');
        }
    };

    protected controller = async (req: Request) => {
        const filmId = Number(req.params.filmId);

        const { name, actors } = req.body;

        await this.checkNameConflict(name);

        const filmData = await updateFilmService(filmId, name, actors);

        if (!filmData) {
            throw new NotFoundError('Film not found');
        }

        return filmData;
    };
}

export const updateFilmController = new UpdateFilmController();
