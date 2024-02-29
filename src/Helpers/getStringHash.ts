import 'dotenv/config';

import Crypto from 'crypto';

export const getStringHash = (string: string): string =>
    Crypto.createHmac('sha256', process.env.AUTH_KEY ?? 'default_auth_key')
        .update(string)
        .digest('hex');
