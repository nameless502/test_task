import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { SuccessStatusCodes } from '../../../Types/index.js';

import { createActorService } from '../Services/index.js';

class CreateActorController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            required: ['name'],
            additionalProperties: false,
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 1024 },
            },
        },
    };

    protected readonly statusCode: SuccessStatusCodes =
        SuccessStatusCodes.created;

    protected controller = (req: Request) => createActorService(req.body);
}

export const createActorController = new CreateActorController();
