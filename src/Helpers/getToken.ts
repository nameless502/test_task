import 'dotenv/config';

import JWT from 'jsonwebtoken';

import { User } from '../Models/User.js';

export const getToken = ({ id, email }: User) => {
    const token = JWT.sign(
        { id, email },
        process.env.TOKEN_KEY ?? 'default_token_key',
        { expiresIn: '7d' }
    );

    return token;
};
