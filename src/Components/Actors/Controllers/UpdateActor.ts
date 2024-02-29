import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { updateActorService } from '../Services/index.js';

import { NotFoundError } from '../../../Errors/index.js';

class UpdateActorController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            required: ['name'],
            additionalProperties: false,
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 1024 },
            },
        },
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                actorId: { type: 'string', pattern: '^\\d+$' },
            },
        },
    };

    protected controller = async (req: Request) => {
        const actorId = Number(req.params.actorId);

        const actorData = await updateActorService(actorId, req.body);

        if (!actorData) {
            throw new NotFoundError('Actor not found');
        }

        return actorData;
    };
}

export const updateActorController = new UpdateActorController();
