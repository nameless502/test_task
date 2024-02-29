import { TypeOrm } from '../../../Libs/index.js';

import { User } from '../../../Models/index.js';

export const createUserService = async (payload: User) => {
    const userData = TypeOrm.manager.create(User, payload);

    await TypeOrm.manager.save(userData);
};
