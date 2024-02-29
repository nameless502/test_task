import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { findActorService } from '../Services/index.js';

import { NotFoundError } from '../../../Errors/index.js';

class FindActorController extends BaseController {
    protected readonly validationSchema = {
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                actorId: { type: 'string', pattern: '^\\d+$' },
            },
        },
    };

    protected controller = async ({ params }: Request) => {
        const actorId = Number(params.actorId);

        const actorData = await findActorService(actorId);

        if (!actorData) {
            throw new NotFoundError('Actor not found');
        }

        return actorData;
    };
}

export const findActorController = new FindActorController();
