import { FindOptionsWhere } from 'typeorm';

import { TypeOrm } from '../../../Libs/index.js';

import { User } from '../../../Models/index.js';

export const findUserService = async (params: FindOptionsWhere<User>) => {
    const userRepository = TypeOrm.getRepository(User);

    const userData = await userRepository.findOne({ where: params });

    return userData;
};
