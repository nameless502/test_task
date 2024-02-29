import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { findFilmService } from '../Services/index.js';

import { NotFoundError } from '../../../Errors/index.js';

class FindFilmController extends BaseController {
    protected readonly validationSchema = {
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                filmId: { type: 'string', pattern: '^\\d+$' },
            },
        },
    };

    protected controller = async ({ params }: Request) => {
        const id = Number(params.filmId);

        const filmData = await findFilmService({ id });

        if (!filmData) {
            throw new NotFoundError('Film not found');
        }

        return filmData;
    };
}

export const findFilmController = new FindFilmController();
