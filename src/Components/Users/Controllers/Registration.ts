import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { SuccessStatusCodes } from '../../../Types/index.js';

import { createUserService, findUserService } from '../Services/index.js';

import { getStringHash } from '../../../Helpers/index.js';

import { ConflictError } from '../../../Errors/index.js';

class RegistrationController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            required: ['username', 'password', 'email'],
            additionalProperties: false,
            properties: {
                username: { type: 'string', minLength: 2, maxLength: 256 },
                email: { type: 'string', format: 'email' },
                password: {
                    type: 'string',
                    minLength: 4,
                    maxLength: 256,
                },
            },
        },
    };

    protected readonly statusCode: SuccessStatusCodes =
        SuccessStatusCodes.created;

    private checkEmailIsUnique = async (email: string) => {
        const userData = await findUserService({ email });

        if (userData) {
            throw new ConflictError('This email is already used');
        }
    };

    protected controller = async (req: Request) => {
        const { password, email } = req.body;

        await this.checkEmailIsUnique(email);

        await createUserService({
            ...req.body,
            password: getStringHash(password),
        });

        return { success: true };
    };
}

export const registrationController = new RegistrationController();
