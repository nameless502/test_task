import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { deleteActorService } from '../Services/index.js';

import { NotFoundError } from '../../../Errors/index.js';

class DeleteActorController extends BaseController {
    protected readonly validationSchema = {
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

        const isDeleted = await deleteActorService(actorId);

        if (!isDeleted) {
            throw new NotFoundError('Actor not found');
        }

        return {};
    };
}

export const deleteActorController = new DeleteActorController();
