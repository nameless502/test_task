import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { deleteFilmService } from '../Services/index.js';

import { NotFoundError } from '../../../Errors/index.js';

class DeleteFilmController extends BaseController {
    protected readonly validationSchema = {
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                filmId: { type: 'string', pattern: '^\\d+$' },
            },
        },
    };

    protected controller = async (req: Request) => {
        const filmId = Number(req.params.filmId);

        const isDeleted = await deleteFilmService(filmId);

        if (!isDeleted) {
            throw new NotFoundError('Film not found');
        }

        return {};
    };
}

export const deleteFilmController = new DeleteFilmController();
