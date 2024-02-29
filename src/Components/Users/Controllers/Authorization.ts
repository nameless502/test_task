import { Request } from 'express';

import { BaseController } from '../../../Classes/BaseController.js';

import { findUserService } from '../Services/index.js';

import { AuthorizationError } from '../../../Errors/index.js';

import { getStringHash, getToken } from '../../../Helpers/index.js';

class AuthorizationController extends BaseController {
    protected readonly validationSchema = {
        body: {
            type: 'object',
            required: ['password', 'email'],
            additionalProperties: false,
            properties: {
                email: { type: 'string', format: 'email' },
                password: {
                    type: 'string',
                    minLength: 4,
                    maxLength: 256,
                },
            },
        },
    };

    protected controller = async (req: Request) => {
        const { email, password } = req.body;

        const userData = await findUserService({
            email,
            password: getStringHash(password),
        });

        if (!userData) {
            throw new AuthorizationError('Wrong email or password');
        }

        const token = getToken(userData);

        this.cookie = { name: 'jwt', payload: token };
    };
}

export const authorizationController = new AuthorizationController();
